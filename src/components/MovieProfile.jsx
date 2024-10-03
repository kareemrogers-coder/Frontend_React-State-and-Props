import { Component } from 'react'; 

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this); // Binding the method
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1 className='user'>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;