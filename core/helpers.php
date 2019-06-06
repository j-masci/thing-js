<?php

if ( ! defined( "GENE_QUOTES_CORE_DIR" ) ) {
	exit;
}

/**
 * @param      $str
 * @param bool $allow_underscore
 *
 * @return mixed|string
 */
function gp_make_slug( $str, $allow_underscore = false ) {

	if ( ! gp_is_singular( $str ) ) {
		return '';
	}

	//Lower case everything
	$str = trim( $str );
	$str = strtolower( $str );
	//Make alphanumeric (removes all other characters)
	$str = preg_replace( "/[^a-z0-9_\s-]/", "", $str );
	//Clean up multiple dashes or whitespaces
	$str = preg_replace( "/[\s-]+/", " ", $str );

	if ( ! $allow_underscore ) {
		//Convert whitespaces and underscore to dash
		$str = preg_replace( "/[\s_]/", "-", $str );
	} else {
		// convert whitespace to underscore
		$str = preg_replace( "/[\s]/", "-", $str );
	}

	return $str;
}

/**
 * @param      $data
 * @param      $key
 * @param null $default
 *
 * @return mixed|null
 */
function gp_if_set( $data, $key, $default = null ) {
	if ( is_array( $data ) ) {
		return isset( $data[ $key ] ) ? $data[ $key ] : $default;
	} else if ( is_object( $data ) ) {
		return isset( $data->{$key} ) ? $data->{$key} : $default;
	} else {
		return $default;
	}
}

/**
 * sanitize user input that's expected to be a string and not contain
 * html and stuff like that.
 *
 * @param $data
 *
 * @return string
 */
function gp_test_input( $data ) {

	// test input expects a string or singular value, so return nothing if its not.
	if ( ! gp_is_singular( $data ) ) {
		return '';
	}

	$data = trim( $data );
	$data = stripslashes( $data );
	$data = htmlspecialchars( $data );

	// double ampersands in original str,
	// this can be the result of calling htmlspecialchars twice on the same string.
	while ( strpos( $data, '&amp;&amp;' ) !== false ) {
		$data = str_replace( '&amp;amp;', '&amp;', $data );
	}

	return $data;
}

/**
 * When you think you have a string, but might have an array..
 *
 * @param $str
 *
 * @return bool
 */
function gp_is_singular( $str ) {
	// faster to use 2 if statements ?
	if ( is_string( $str ) ) {
		return true;
	}
	if ( is_int( $str ) || is_float( $str ) || is_bool( $str ) || is_null( $str ) ) {
		return true;
	}

	return false;
}

/**
 * @param $thing
 *
 * @return string
 */
function gp_get_print_r( $thing ) {
	$op = '';
	$op .= '<pre>';
	$op .= print_r( $thing, true );
	$op .= '</pre>';

	return $op;
}

/**
 * Basically just adds dollar amounts.
 *
 * Perhaps a bit overkill, but it does allow for easier testing.
 *
 * The main goal is to prevent rounding errors, both in the case
 * of floating point precision and just in general... dollar
 * amounts always have to be rounded to cents before adding...
 *
 * Like if you applied a tax rate and a 3% discount at the same time.
 *
 * Class GP_Mutable_Dollar_Amt
 */
Class GP_Mutable_Dollar_Amt {

	/**
	 * dollar amount, always a string with 2 decimals.
	 *
	 * @var string
	 */
	private $amt;

	/**
	 * GP_Mutable_Dollar_Amt constructor.
	 *
	 * @param int $amt
	 */
	public function __construct( $amt = 0 ) {
		$this->set( $amt );
	}

	/**
	 * Doesn't currently accept things like USD $44.00 or even $44.00
	 * unless we decide we should make it support those..
	 *
	 * Mainly, formats int, string representing a decimal, or floating point
	 * number in a way that (should) never have rounding errors.
	 *
	 * @param $amt
	 *
	 * @return string - dollar amount with 2 decimals
	 */
	public static function format( $amt ) {
		return GP_Dollars::format( $amt );
	}

	/**
	 * @return string
	 */
	public function get() {
		return $this->amt;
	}

	/**
	 * @param $amt
	 */
	public function set( $amt ) {
		$this->amt = self::format( $amt );
	}

	/**
	 * @param $amt
	 */
	public function add( $amt, $format = true ) {
		$this->amt = GP_Dollars::add( $this->amt, $format ? self::format( $amt ) : $amt );
	}

	/**
	 * @param $multiplier -
	 */
	public function multiply( $multiplier ) {
		$this->amt = GP_Dollars::multiply( $this->amt, $multiplier );
	}

	/**
	 * @param $amt
	 */
	public function subtract( $amt, $format = true ) {
		$this->amt = GP_Dollars::subtract( $this->amt, $format ? self::format( $amt ) : $amt );
	}
}

/**
 * Helpers for formatting and adding dollar amounts.
 *
 * Simply using round() on float is not good. Many floating point
 * precision errors can occur. Uses bcmath extension.
 *
 * Class GP_Dollars
 */
Class GP_Dollars {

	/**
	 * Takes a string, float, int, etc. (more or less anything), and returns
	 * a string with 2 decimal places in such a way that should not incur
	 * any rounding errors. Note that the bcmath functions expect string
	 * values to be passed in.
	 *
	 * @param      $something
	 * @param bool $user_input
	 *
	 * @return string
	 */
	public static function format( $something ) {

		// no idea what to return here, 0, "0", "0.00", null, false??
		if ( ! gp_is_singular( $something ) ) {
			return false;
		}

		// - number_format requires a float (or double) to be passed in
		// - be aware: floatval( "$90.00" ) is zero.
		// - if we call regex always, then this means float values get converted to string
		// and then back to float. This process, either part or the whole thing, could lead
		// to rounding errors.
		// - sometimes we call this on user input so its important to properly address
		// things like "$90.00" or "CAD $90.00".
		if ( is_int( $something ) || is_bool( $something ) || is_null( $something ) ) {
			$something = floatval( $something );
		} else if ( is_float( $something ) || is_double( $something ) ) {
			// ok...
		} else {
			// this should indicate string, since we already checked gp_is_singular, the
			// types other than string are already covered.
			$something = floatval( preg_replace( '/[^0-9.]+/', '', $something ) );
		}
		$something = floatval($something);

		return number_format( $something, 2, '.', '' );
	}

	/**
	 * When input is not a string, you may want to use self::format.
	 *
	 * @param $v1
	 * @param $v2
	 *
	 * @return string - dollar amount with exactly 2 decimals
	 */
	public static function add( $v1, $v2 ) {
		return bcadd( $v1, $v2, 2 );
	}

	/**
	 * When input is not a string, you may want to use self::format.
	 *
	 * @param $v1
	 * @param $v2
	 *
	 * @return string - dollar amount with exactly 2 decimals
	 */
	public static function multiply( $v1, $v2 ) {
		return bcmul( $v1, $v2, 2 );
	}

	/**
	 * When input is not a string, you may want to use self::format.
	 *
	 * @param $left
	 * @param $right
	 *
	 * @return string - dollar amount with exactly 2 decimals
	 */
	public static function subtract( $left, $right ) {
		return bcsub( $left, $right, 2 );
	}
}