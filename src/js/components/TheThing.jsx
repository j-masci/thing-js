import AThing from './AThing';
import Generic from './Generic';

class Reflection extends React.Component {

    constructor(props) {
        super(props);
        this.props.onInit(this);
    }

    render() {

        let thing = this.props.getLinked() || {};

        return (
            <div className="reflection">
                {thing.steps}, {thing.edges}
            </div>
        )
    }
}

export default class TheThing extends React.Component {

    constructor(props) {
        super(props);

        this.key = 0;

        this.things = [];

        for( let x = 0; x < 2; x ++ ) {
            this.things.push({
                key: this.getKey()
            });
        }


        this.thingRefs = {};
        this.reflectionRefs = {};

        Generic.provideTests( this );

        this.addTest( 'Add', () => {

            this.things.push({
                key: this.getKey()
            });

            this.forceUpdate();
        });

        this.addTest( 'Minus', () => {

            this.things = this.things.filter( ( thing, index ) => {
                return index !== 0;
            }).map( ( thing, index ) => {
                thing.index = index;
                return thing;
            });

            this.forceUpdate();
        });
    }

    getKey = () => {
        this.key++;
        return this.key;
    };

    render() {
        return (
            <>
            {this.renderTests()}
            <div className="the-thing" style={{
                position: 'absolute',
                width: '800px',
                height: '800px',
                border: '2px solid blue',
            }}>
                {this.things.map((thing, index) => {
                    return ( <AThing
                        key={thing.key}
                        _key={thing.key}
                        index={index}
                        onInit={ ( comp ) => {
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
                        _key={thing.key}
                        index={index}
                        onInit={ ( comp ) => {
                            this.reflectionRefs[thing.key] = comp;
                        }}
                        getLinked={ () => {
                            return this.thingRefs[thing.key];
                        }}
                    /> );
                })}
            </div>
            </>
        )
    }
}