import React,{Component} from 'react';

class Contact extends Component{
    
    render(){
        return(
            <div className = "contact">
                <img src="https://www.kindpng.com/picc/m/52-526798_anonymous-person-transparent-hd-png-download.png" alt=""/>
                <div className="contact-info">
                <a className="contact-name"> {this.props.contact.firstName} {this.props.contact.lastName}</a><br/>
                <a className="contact-phone"> {this.props.contact.phone}</a><br/>
                <a className={this.props.contact.gender}></a>
                </div>
            </div>
        )
    }
}

export default Contact