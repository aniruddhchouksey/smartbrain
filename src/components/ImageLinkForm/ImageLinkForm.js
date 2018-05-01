import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div className='ma4 mt0 ' >
			<p className= 'f3'>
				{'This magic app will detect faces in your pictures. Give it a try'}
			</p>	
			<div className='center form'>
				<div className='pa4 br3 shadow-5' >
			<input placeholder='Enter URL of sample' className='f4 pa2 w-70 ' type='text' onChange={onInputChange} />
			<button 
				className='pa2 w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
				onClick={onButtonSubmit} 
			>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;