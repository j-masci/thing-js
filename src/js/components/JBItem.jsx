class JBReflection extends React.Component {

    constructor(props) {
        super(props);
        this.json = {};
    }

    render() {

        this.json = this.props.of.getJson();

        return (
            <div className="jb-reflection">
                {JSON.stringify(this.json)}
            </div>
        );
    }
}

export default class JBItem extends React.Component {

    constructor(props) {
        super(props);

        this.isRoot = this.props.isRoot || false;
        this.reflection = React.createRef();
        this.lastUid = 0;

        this.r = {
            key: React.createRef(),
            value: React.createRef(),
        };

        this.parent = this.isRoot ? this : this.props.p;

        this.type = this.props.type || 0;

        if ( this.isRoot ) {
            this.type = this.props.type || 1;
        }

        // define only in root
        this.f = this.props.f || {
                root: this,
                getUid: function (mountedComponent) {
                    mountedComponent.lastUid++;
                    return "_" + mountedComponent.lastUid;
                }
            };

        this.children = [];
        this.childRefs = {};

        this.Controls = React.memo((props) => {

            let add = (e) => {
                this.addChild();
                this.forceUpdate();
            };

            let del = (e) => {
                this.deleteSelf();
            };

            let primitive = (e) => {
                this.type = 0;
                this.forceUpdate();
            };

            let arr = (e) => {
                this.type = 1;
                this.forceUpdate();
            };

            let obj = (e) => {
                this.type = 2;
                this.forceUpdate();
            };

            return (
                <div className="jb-controls">
                    <span onClick={add}>add</span>
                    {` `}
                    <span onClick={del}>del</span>
                    {` `}
                    {!this.isRoot && (
                        <>
                        <span onClick={primitive}>P</span>
                        {` `}
                        </>
                    )}
                    <span onClick={arr}>A</span>
                    {` `}
                    <span onClick={obj}>O</span>
                </div>
            );
        });
    }

    componentWillUnmount() {
        if (this.parent) {
            if (this.parent.childRefs[this.props._key]) {
                delete this.parent.childRefs[this.props._key];
            }
        }
    }

    getJson = () => {

        let orderedChildComponents = [];

        this.children.forEach(child => {
            let c = this.childRefs[child.key];
            if (c) {
                orderedChildComponents.push({
                    key: c.getKey(),
                    comp: c
                });
            }
        });

        console.log(orderedChildComponents);

        if (orderedChildComponents.length < 1) {

            if (this.isRoot) {
                return {};
            }

            if (this.r.value.current) {
                return this.r.value.current.value;
            }
        }

        let keysAreOrdered = true;

        let counter = 0;

        orderedChildComponents.forEach(cc => {
            if (cc.key != counter) {
                keysAreOrdered = false;
            }
            counter++;
        });

        let ret;

        console.log('keys...', keysAreOrdered);

        if (keysAreOrdered) {

            ret = [];

            orderedChildComponents.forEach(cc => {
                ret.push(cc.comp.getJson());
            });

        } else {

            ret = {};

            orderedChildComponents.forEach(cc => {
                ret[cc.key] = cc.comp.getJson();
            });
        }

        return ret;
    };

    addChild = (props = {}) => {
        let key = this.f.getUid(this);
        this.children.push(Object.assign({
            key: key,
            _key: key,
            iValue: "",
            iKey: this.children.length
        }, props));
        this.updateReflection();
    };

    deleteSelf = () => {

        if (this.isRoot) {
            return;
        }

        delete this.parent.children[this.props.index];

        if (this.parent.childRefs[this.props._key]) {
            delete this.parent.childRefs[this.props._key]
        }

        this.parent.forceUpdate();
    };

    getKey = () => {
        return this.r.key.current && this.r.key.current.value;
    };

    getValue = () => {
        return this.r.value.current && this.r.value.current.value;
    };

    updateReflection = () => {
        if (this.f.root.reflection.current) {
            this.f.root.reflection.current.forceUpdate();
        }
    };

    render() {

        console.log("ItemRender", this );

        let hide = {display: "none"};

        if ( this.isRoot && this.type === 0 ) {
            this.type = 2;
        }

        if ( this.children.length === 0 ) {
            if ( this.type === 1 || this.type === 2 ) {
                this.addChild();
            }
        } else {
            if ( this.type === 0 ) {
                this.type = 2;
            }
        }

        return (
            <>
            {this.isRoot && (
                <JBReflection of={this} ref={this.reflection}/>
            )}
            <div className="jb-item" style={{
                paddingLeft: "20px",
            }}>
                <this.Controls dep1={this.index} dep2={this.type} />
                {this.isRoot && (
                    <p>Root</p>
                )}
                {!this.isRoot && (
                    <>
                    {this.parent && this.parent.type === 1 && (
                        <span>{this.index}</span>
                    )}
                    <input
                        type="text"
                        name="key"
                        placeholder="key"
                        ref={this.r.key}
                        onChange={this.updateReflection}
                        style={this.parent && this.parent.type === 1 ? hide : {}}
                    />
                    <input
                        type="text"
                        name="value"
                        placeholder="value"
                        ref={this.r.value}
                        onChange={this.updateReflection}
                        style={this.type === 1 || this.type === 2 ? hide : {}}
                    />
                    </>
                )}
                <span>{` `}{this.type} - {this.children.length}</span>
                {(this.type === 1 || this.type === 2) && this.children.map((item, index) => <JBItem p={this} f={this.f} index={index} {...item} />)}
            </div>
            </>
        );
    }

    componentDidMount() {

        if (this.parent) {
            this.parent.childRefs[this.props._key] = this;
        }

        console.log('mount', this.r);

        if (!this.isRoot) {
            this.r.key.current.value = this.props.iKey;
            this.r.value.current.value = this.props.iValue;
        }
    }
}

