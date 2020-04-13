	import React, {Component} from 'react';
	
	function switch(value){
		if props.value < 0.15 {
				return <p> Value is not sufficient</p>
			} else {
		return <p> Try waffle switch today with cryptos </p>
		}
	}
		
	const CryptoNames = {
		X: 'Xylenium',
		B: 'Blitzz'
	 };
	 
	class TransactionInput extends react.component {
		constructor(props){
			super(props);
			this.handlechange = this.handlechange.bind(this)
			}
			
	handlechange(e) {
		 this.props.onstockchange(event.target.value);
	    }
		
	render() {
			const stock = this.props.stock;
			const crypto = this.props.crypto;
		return (
			<fieldset>
				<legend> Enter the value in {CryptoNames[crypto]}</legend>
				<input value ={stock} onchange=(this.handlechange) >
			</fieldset>
		    );
	    }
	}

    function toBlitzz(Xylenium) {
		return (Xylenium * 468);
		}
		
	function toXylenium(Blitzz) {
		return (Blitzz/ 46.88);
	   }
	   
	function tryconvert(stock, convert) {
	 const input = parsefloat(stock);
	 if (Number.isNan(stock)){
		return 'not a number'
	 }
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.tostring();
    }
	
	class Converter extends react.component {
		constructor (props) {
			super(props);
			this.handleBlitzzchange = this.handleBlitzzchange.bind(this);
			this.handleXyleniumchange = this.handleXyleniumchange.bind(this);
			this.state = {stock: '', crypto:  'B'};
		}
		
		handleBlitzzchange(stock) {
			this.setstate({crypto: 'B', stock});
			}
		handleXyleniumchange (stock) {
			this.setstate({crypto: 'X', stock});
			}
			
		render {
			const crypto = this.state.crypto;
			const stock = this.state.stock;
			const blitzz = crypto === 'E' ? tryconvert(stock, toXylenium): stock;
			const xylenium = crypto === 'B' ? tryconvert (stock, toBlitzz) : stock;
			return(
				<div>
				<TransactionInput input ={blitzz} crypto ={B} onstockchange = {this.handleBlitzzchangechange} />
				<TransactionInput  input ={xylenium} crypto ={E} onstockchange = {this.handleXyleniumchange} />
				<switch value = {parsefloat(blitzz)}>
				</div>
				);
			}
		}
	export default Converter