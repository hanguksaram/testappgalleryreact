import React, { Component } from 'react';
import { closePopup } from '../../actions/popup'
import { addImage } from '../../actions/images'
import { connect } from 'react-redux'
import md5 from 'js-md5'

class ImageUploader extends Component {
    

    state = {
        image: {
            url: '',
            title: '',
            isUrlValid: false
            
        },
        error: undefined
    }
    
    handleForm = (e) => {
        e.preventDefault()
        if (this.state.image.title.trim() === '' || !this.state.image.isUrlValid){
            console.log(this.state.image)
            this.setState({error: 'Complete the form properly'})
            return
        }
        const id = md5(this.state.image.url + Date.now())

        this.props.addImage({
           ...this.state.image, id
        })
        this.setState({error: 'Image was added to gallery'})  
    }
    
    handleTitle = (e) => {
        
        const newImage = {...this.state.image}
        newImage.title = e.target.value
        this.setState({image: newImage})
            
    }

    handleUrl = (e) => {
        const newImage = {...this.state.image}
        newImage.url = e.target.value
        this.setState({image: newImage})
    }
    validateUrl = () => {
        if(!this.state.image.url.match(/^https?\S+\.(png|jpg|jpeg|gif)$/)) {
            this.setState({error: "Please input valid image's url"})
                return
        }
        const newImage = {...this.state.image}
        newImage.isUrlValid = true
        this.setState({image: newImage})
           
    }
    clearError = () => {
        this.setState({error: null})
    }

    
    render() {
        return (
            <div className="imageUploader__container">
                <form onSubmit={this.handleForm}>
                    <h3>New Image</h3>
                    <div className="imageUploader__inputWrapper">
                        <input onChange={this.handleTitle} type="text" placeholder="Title" value={this.state.image.title} />
                    </div>
                    <div className="imageUploader__inputWrapper">   
                        <input onFocus={ this.clearError} onBlur={this.validateUrl} onChange={this.handleUrl} type="text" placeholder="Url" value={this.state.image.url}/>
                    </div>
                    {!!this.state.error && <div className="errorNotification">{this.state.error}</div>}
                    <div className="imageUploader__btnSection">
                        <input onClick={this.props.closePopup} type="button" value="CLOSE"/>
                        <input type="submit" value="ADD"/></div>
                    
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => (
    {
        galleryLength: state.images.length
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        closePopup: () => (dispatch(closePopup())),
        addImage: (image) => (dispatch(addImage(image)))

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);