
export default class AThing extends React.Component{

    constructor(props){
        super(props);
        this.props.onInit(this);

        this.interval = undefined;

        this.x = 100 * Math.random();
        this.y = 100 * Math.random();

        this.steps = 0;
        this.edges = 0;

    }

    rand = ( pos ) => {
        let next = pos + 10 * ( ( 2 * Math.random() - 1) );
        if ( next < 0 || next > 100 ) {
            this.edges++;
            next = 50;
        }
        return next;
    };

    componentDidMount(){
        this.interval = setInterval( () => {
            this.steps++;
            this.x = this.rand(this.x);
            this.y = this.rand(this.y);
            this.forceUpdate();
        }, 500 );
    }

    componentWillUnmount(){

        // probably not needed... ?
        if ( this.interval ) {
            clearInterval( this.interval );
        }
    }

    render(){

        let reflection = this.props.getLinked();

        if ( reflection ) {
            reflection.forceUpdate();
        }

        return (
            <div
                className="a-thing"
                style={{
                    position: "absolute",
                    bottom: this.x + "%",
                    left: this.y + "%",
                    borderRadius: "10px",
                    transition: "all .5s linear",
                    width: "5px",
                    height: "5px",
                    background: "black"
                }}
            />
        )
    }
}