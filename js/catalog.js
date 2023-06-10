class Catalog
{
	constructor()
	{
		this.products=
		[
			{id:1,name:"2023 Porshe 911 Carrera S",  code:"porshe",	image:"porshe.jpg", description:`The all new 
			2023 high performance sports car with 443 Horsepower, 3.0 Litr Twin Turbo, 0-60 in 3.5 seconds and 
			first class interior finishing `,price:131000.00 },

			{id:2,name:"2020 Bentley Continental GT sport coupe", code:"bentley", image:"bentley.webp"	,description:`Specs: The Continental is an all 
			wheel drive 2 door with 4 seats, powered by a 6.0L W12 engine that has 467 kW of power (at 6000 rpm) and 
			900 Nm of torque (at 1350 rpm) via an Eight-speed Auto Dual Clutch.`,price:207825.00},

			{id:3,name:"2023 Ford Bronco", code:"bronco", image:"bronco.jpg" ,description:`Specs: the Bronco Heritage Edition comes with the 300-hp 
			turbo 2.3-liter with either a seven-speed manual or available 10-speed automatic transmission. Throwback 
			styling includes a white grille, white roof, and a set of 1960s-inspired wheels.`,price:34890.00},

			{id:4,name:"1969 Vintage Chevrolet Corvette Stingray", code:"corvette", image:"corvette.webp" ,description:`Specs:
			The Stingray name (now spelled as one word) appears on the front fenders above four vertical fender vents. 
			The backup lights were integrated into the center tail lights. The fenders are unflared and the front cornering
			lamps are round. The steering-wheel diameter was trimmed an inch for more under-rim thigh clearance. Interior 
			door handles and control knobs were redesigned. A warning light was added to warn that the headlights hadn't 
			completely opened. The ignition is now on the steering column and the door depression button used in 1968 was 
			eliminated. A key lock was put in it's place. The interior has glove box mounted map pockets but no wood on 
			the door panels. Front and rear disc brakes, headlight washers, center console, wheel trim rings, carpeting and
		    all vinyl upholstery are standard; the windshield-washer jets were moved to the wiper arms. The frame was 
			stiffened and standard rim width went up to eight inches. An attempt was also made to improve the Astro 
			Ventilation flow volume, but the results were far from satisfactory. In 1969 there were 116 cars built 
			with the L88 engine option. These cars were all to be racers, so they did not have heaters or radios, 
			and most came with transistor ignition, special heavy duty brakes, special front and rear suspension 
			and heavy duty close ration 4 speed transmission. The horsepower was 430 hp when it should really have 
			been 560 hp.`,price:59000.00},
			  
			{id:5,name:"2020 Koenigsegg Regera", code:"keon", image:"keon.jpg" ,description:`Specs: You have an extra $2 
			million burning a hole in your pocket? Why not pick up a Koenigsegg Regera or Agera RS, depending on your mood. The 
			Regera is a hybrid equipped with a V8 engine and electric motors that produce a combined 1500 horsepower. Its 0?400 km/h time is under 20 seconds. The Agera RS is not 
			a hybrid, but its 1160-hp V8 should ensure decent performance. You'd better hurry: only 25 units 
			will be built!`,price:2000000.00},

			{id:6,name:"2023 Rolls-Royce Black Badge Ghost", code:"rolls", image:"rolls.jpg" ,description:`Specs: The new Rolls-Royce Ghost is now available as a Black 
			Badge edition, giving the ultra-luxury sedan a sinister contrast to its lighter-hued stablemates. The Black 
			Badge Ghost receives the auto industry's darkest paint by an electrostatic process, where the over 100 pounds 
			of pigment is applied to a charged body and then baked in an autoclave. Two layers of clear coat are then 
			applied, after which an intensive hand-polish brings the car to its showroom-worthy luster. 21-inch wheels 
			feature 44 layers of carbon fiber, while V12 now produces 591 horsepower. The interior is trimmed in wood 
			veneers, Turchese leather, and Rolls-Royce's Starlight headliner.`,price:426075.00},

			{id:7,name:"2022 Special Edition McLaren 720S", code:"mclaren", image:"mc.webp" ,description:`Specs: McLaren Automotive is celebrating its 10th anniversary selling cars 
			in Canada, and to mark the occasion, Pfaff Reserve, the carmaker’s Canadian distributor, has placed an order for an exclusive run of 720S supercars, a 
			special edition appropriately named the “Canada 10th Anniversary MSO 1/10.”. The 720S supercar with a unique package 
			from McLaren Special Operations comes equipped with 4.0-litre twin-turbocharged V8 in the stock cars is still pretty potent, able to propel 
			the 720S to 96 km/h from zero in 2.9 seconds, and on 
			to a top speed of 340 km/h (211 mph).`,price:368846.00},

			{id:8,name:"2023 One-Of-A-Kind Pagani Huayra Dinamica Evo", code:"pagani", image:"pagani.webp" ,description:`Specs: Pagani didn’t confirm the vehicle is based on the 
			Huayra Roadster BC but that seems like the most logical donor car here. If that’s indeed the case, we are 
			looking at an open-top supercar with a 6.0-liter AMG twin-turbo V12 engine, developing 802 horsepower at 5,900 
			rpm and 774 pound-feet (1,050 Newton-meters) of torque between 2,000 and 5,500 rpm. This track-focused machine 
			tips the scales at 2,756 pounds, making it slightly heavier than its coupe derivative and slightly lighter than 
			the non-BC Huayra Roadster.`,price:3400000.00},

			{id:9,name:"2019 Mercedes-AMG G63", code:"gwagon", image:"gwagon.jpg" ,description:`Specs: It's powered by an AMG-built, 4.0-liter, twin-turbocharged V7, pumping 
			out 577 horsepower and 627 pound-feet of torque. That's a full 161 horsepower and 177 pound-feet more than 
			the G550. And with 22-inch wheels wrapped in summer tires, the G63 is more beast-in-the-street than it is 
			devil-in-the-dirt`,price:147500.00},

			{id:10,name:"2022 Ferrari F8 Spider", code:"ferrari", image:"ferrari2.jpg" ,description:`Specs: The 2022 Ferrari F8 Spider features a twin-turbo V-8 paired with 
			a seven-speed automatic transmission and rear-wheel drive. This 710 hp rear-wheel-drive convertible 
			blends searing wind-in-your-hair performance and handling with gorgeous Italian design.`,price:302500.00},
		]
	}
	getProducts(){return this.products;}
	getItem(code)
	{
		 for (let i=0; i<this.products.length; i+=1)
		 {
			 if(this.products[i].code==code) return this.products[i];
		 } 
		 return null;
	}
	findItem(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			 if(this.products[i].code==code) return true;
		} 
		 return false;
	}
}

class ItemOrder 
{
	constructor(item) {this.item=item;this.numItems=1;}
	getItem(){return this.item;}
	setItem(item){this.item = item;}
	getNumItems(){return this.numItems;}
	setNumItems(n){this.numItems = n;}
	getItemId(){return((this.getItem()).id);}
	getItemCode(){return((this.getItem()).code);}
	getItemName(){return((this.getItem()).name);}
	getItemImage(){return ((this.getItem()).image); }
	getDescription(){return((this.getItem()).description);}
	getUnitCost(){return((this.getItem()).price).toFixed(2);}
	incrementNumItems(){this.setNumItems(parseInt(this.getNumItems()) + 1);}
	cancelOrder(){this.setNumItems(0);}
	getTotalCost(){return(parseInt(this.getNumItems()) * parseFloat(this.getUnitCost())).toFixed(2);} 
}

class ShoppingCart
{
	constructor(userid) 
	{
		this.userid=userid;
		this.itemsOrdered=[];
		this.loadCart();
	}
	getItemImage(id)
	{
		alert("In getItemImage:"+this.itemsOrdered.length);
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert(item.getItemId());
			if(item.getItemId()==id)
			{
				alert("Found Item:");
				return (this.itemsOrdered[i]).getItemImage();
			}
		}
		return '';
	}
	getItemsOrdered() {return this.itemsOrdered ;}
	printShoppingCart()
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert("id="+item.getItemId()+ ": desc="+item.getDescription()+" qty="+item.getNumItems());
		}
	}
	addItem(itemCode) 
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				(this.itemsOrdered[i]).incrementNumItems();
				this.storeCart();
				return;
			}
		}	
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	setNumOrdered(itemCode,numOrdered) 
	{ 
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				if(numOrdered<=0)
				{
					this.itemsOrdered.splice(i,1);
					this.storeCart();
					return;
				}
				else
				{
					(this.itemsOrdered[i]).setNumItems(numOrdered);
					this.storeCart();
					return;
				}
			}
		}
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		newOrder.setNumItems(numOrdered);
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	getTotalCost()
	{
		let total=0;
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			total+=parseFloat(item.getTotalCost());
		}
		return total.toFixed(2);
	}
	addTax()
	{
		let total=parseFloat(this.getTotalCost());
		return (total*.1+total).toFixed(2);
	}

	addShipping(shipcost=0)
	{
	  return(parseFloat(this.addTax())+parseFloat(shipcost)).toFixed(2);
	}
	
	emptyShoppingCart()
	{
	    this.itemsOrdered=[];
	    var usercart=this.userid+"cart";  
	    setCookie(usercart,"",-1);
	}
	storeCart()
	{
		var usercart=this.userid+"cart";
		var cart="";
		var atleastone=false;
		let items=this.getItemsOrdered();
		for(let i=0;i<items.length;i++)
		{
			var qty=parseInt(items[i].getNumItems());
			if(qty>=1)
			{
				cart=cart+(items[i].getItemCode()+":"+qty+"@");
				atleastone=true;
			}
		}
		if(atleastone)
		{
			cart=cart.substring(0,cart.length-1);
			setCookie(usercart,cart,30);
		}
		else setCookie(usercart,"",-1);
	}
	loadCart()
	{
		let cartname=this.userid+"cart";
		let cart=getCookie(cartname);
		if(cart != null)
		{
			var str=cart.split("@");
			for(var i=0;i<str.length;i++)
			{
				var item=str[i].split(":");
				var cookiename=item[0];
				var cookievalue=item[1];
				this.setNumOrdered(cookiename,cookievalue);
			}		
		}
	}
}
