<?php

if ( ! defined( "TT_BASE_DIR" ) ) {
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
