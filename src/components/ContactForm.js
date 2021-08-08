import React,{useState,useEffect} from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    var [values,setValues] = useState(initialFieldValues)
    const handleInputChange = e => {
        var {name,value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
        console.log("IN FORM", values)
    }
    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
           <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user">
                        </i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" 
                defaultValue={values.fullName}
                onChange={handleInputChange}/>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile">
                            </i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Phone Number" name="mobile" 
                    defaultValue={values.mobile}
                    onChange={handleInputChange}/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope">
                            </i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" 
                    defaultValue={values.email}
                    onChange={handleInputChange}/>
                </div>
            </div>
            <div className="form-group input-group ">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope">
                        </i>
                    </div>
                </div>
                <input className="form-control" placeholder="Address" name="address" 
                defaultValue={values.address}
                onChange={handleInputChange}/>
            </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-primary btn-block"/>
                </div>
        </form>
    );
}

export default ContactForm;