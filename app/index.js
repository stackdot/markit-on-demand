'use strict'



// Required Modules:
const colors 		= require('colors')
const debug 		= require('debug')('markit-on-demand:main')
const lodash 		= require('lodash')
const Q 			= require('q')
const request		= require('request')
const async			= require('async')


// Static Params:
const BASE_URL 		= 'http://dev.markitondemand.com/MODApis/Api/v2/'



/**
 *  MarkitOnDemand Class
 */
class MarkitOnDemand {



	/**
	 *  Constructor
	 *  @param  {Object} params Params to be set into this instance
	 *  @return {MarkitOnDemand}        MarkitOnDemand instance
	 */
	constructor( params ){

		debug('Instance Created:', params)
		this.params = params

		this.lookup('AMZN')
			.then(( res ) => {
				console.log('Done', res)
			})

		return this

	}



	lookup( query ){
		request( this.lookupUrl( query ), ( err, res, body ) => {
			console.log('done', err)

		})
	}



	/**
	 *  Generate the URL for Symbol Lookups
	 *  @param  {String} query 	Search query to lookup symbols by
	 *  @return {String}        URL to call to find symbol data
	 */
	lookupUrl( query ){
		return `${BASE_URL}Lookup/json?input=${query}`
	}



	/**
	 *  Generate the URL for Quote Lookup
	 *  @param  {[type]} symbol [description]
	 *  @return {[type]}        [description]
	 */
	quoteUrl( symbol ){
		return `${BASE_URL}Quote/json?symbol=${symbol}`
	}




}



/**
 *  Export
 *  @param  {Object} 	params 	MarkitOnDemand library params
 *  @return {MarkitOnDemand}        New instance of the MarkitOnDemand library
 */
module.exports = ( params )=> {
	return new MarkitOnDemand( params )
}
