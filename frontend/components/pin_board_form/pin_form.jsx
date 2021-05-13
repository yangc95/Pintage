import React from 'react';

class PinForm extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            title: "",
            about: "",
            photoUrl: null,
            photoFile: null,
            user_id: this.props.session,
            board_id: 1 // this needs to be dynamic later
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
        formData.append('pin[user_id]', this.state.user_id);
        formData.append('pin[title]', this.state.title);
        formData.append('pin[about]', this.state.about);
        this.props.createPin(formData).then(this.props.closeModal());
    }

    render() {
        const { title, about, photoUrl } = this.state;

        return (
            <div className="pin-form-div">
                <div className="x-close pinform" onClick={this.props.closeModal}>
					&times;
				</div>
                <form className="pin-form" onSubmit={this.handleSubmit}>
                    <label className="pin-photo-label">
                        {photoUrl ?
                        <img className="pin-img" src={photoUrl} alt="Image handle"/> :
                        <input 
                            className= "pin-input-photo"
                            type="file"
                            onChange={this.handleFile}
                        />}
                    </label>
                    <span className="pin-form-info">
                        <label >
                            <input
                                className="pin-input-title" 
                                type="text" 
                                value={title}
                                onChange={this.update('title')}
                                placeholder="Add your title"
                            />
                        </label>
                        <label>
                            <textarea
                                className="pin-input-about"
                                value={about}
                                onChange={this.update('about')}
                                placeholder="Tell everyone what your pin is about"
                            />
                        </label>
                    </span>
                    <button className="pin-input-button">Save</button>
                </form>
            </div>
        )
    }
}

export default PinForm;