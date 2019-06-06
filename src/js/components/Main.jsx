
import TheThing from './TheThing';

export default class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
            <p>Main...</p>
            <TheThing />
            </>
        );
    }

}