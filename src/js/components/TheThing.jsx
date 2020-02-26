// import AThing from './AThing';
import Generic from './Generic';

export default class TheThing extends React.Component {

    constructor(props) {
        super(props);

        this.key = 0;

        this.things = [];

        for (let x = 0; x < 2; x++) {
            this.things.push({
                key: this.getKey()
            });
        }

        this.dir = 1;

        this.thingRefs = {};
        this.reflectionRefs = {};

        this.c = React.createRef();

        Generic.provideTests(this);

        this.addTest('Add', () => {
            this.insert();
            this.forceUpdate();
        });

        this.addTest('Minus', () => {
            this.del();
            this.forceUpdate();
        });
    }

    del = () => {
        this.things = this.things.filter((thing, index) => {
            return index !== 0;
        }).map((thing, index) => {
            thing.index = index;
            return thing;
        });
    };

    insert = (props = {}) => {
        this.things.push(Object.assign({}, {
            key: this.getKey()
        }, props));
    };

    getKey = () => {
        this.key++;
        return this.key;
    };

    componentDidMount() {

        console.log(this.c);
        console.dir(this.c);
        let ctx = this.c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();

    }

    render() {
        return (
            <>
            {this.renderTests()}
            <div className="the-thing" style={{
                position: 'relative',
                width: '800px',
                height: '800px',
                border: '2px solid blue',
            }}>
                {this.things.map((thing, index) => {
                    return ( <AThing
                        {...thing}
                        key={thing.key}
                        parent={this}
                        _key={thing.key}
                        index={index}
                        onInit={ (comp) => {
                            this.thingRefs[thing.key] = comp;
                        }}
                        getLinked={ () => {
                            return this.reflectionRefs[thing.key];
                        }}
                    /> );
                })}

                {this.things.map((thing, index) => {
                    return ( <Reflection
                        key={thing.key}
                        parent={this}
                        _key={thing.key}
                        index={index}
                        onInit={ (comp) => {
                            this.reflectionRefs[thing.key] = comp;
                        }}
                        getLinked={ () => {
                            return this.thingRefs[thing.key];
                        }}
                    /> );
                })}
            </div>
            <canvas
                id="shit"
                width="800"
                height="800"
                ref={ (ele) => {
                    if (ele) {
                        this.c = ele;
                    }
                }}
                style={{
                    border: "1px solid green",
                    margin: "40px auto",
                }}/>
            </>
        )
    }
}

class AThing extends React.Component {

    constructor(props) {
        super(props);
        this.props.onInit(this);

        this.interval = undefined;

        this.x = this.props.startX !== undefined ? this.props.startX : 100 * Math.random();
        this.y = this.props.startY !== undefined ? this.props.startY : 100 * Math.random();

        this.steps = 0;
        this.edges = 0;
    }

    rand = (pos) => {
        let next = pos + 10 * ( ( 2 * Math.random() - 1) );
        if (next < 1 || next > 99) {
            this.edges++;
            next = Math.abs(100 - next);

            if (this.props.parent.things.length > 55) {
                this.props.parent.dir = -1;
            }

            if (this.props.parent.things.length < 3) {
                this.props.parent.dir = 1;
            }

            if (this.props.parent.dir < 0) {

                if (Math.random() > 0.9) {
                    this.props.parent.del();
                    this.props.parent.forceUpdate();
                }

            } else {

                if (Math.random() > 0.5) {
                    for (let x = 0; x < 10; x++) {
                        this.props.parent.insert({
                            startX: this.x,
                            startY: this.y
                        });
                    }
                    this.props.parent.forceUpdate();
                }
            }
        }
        return next;
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.steps++;
            this.x = this.rand(this.x);
            this.y = this.rand(this.y);
            this.forceUpdate();
        }, 500);
    }

    componentWillUnmount() {

        // probably not needed... ?
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {

        let reflection = this.props.getLinked();

        if (reflection) {
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

class Reflection extends React.Component {

    constructor(props) {
        super(props);
        this.props.onInit(this);
    }

    render() {

        let thing = this.props.getLinked() || {};

        return (
            <div className="reflection" style={{
                fontSize: "9px",
            }}>
                {thing.props.index}: {thing.steps}, {thing.edges}
            </div>
        )
    }
}