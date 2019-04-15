module.exports=(...args)=>args.reduce((acc,value)=>

{
	  
		 if(value!=0)
		 {
			 return acc%=value
		 }
		 else{
			throw'canot divide on 0'
		 }
}

);