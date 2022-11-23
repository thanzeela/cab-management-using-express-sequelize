const{Sequelize, DataTypes}=require('sequelize')                 
const sequelize = new Sequelize("cabservice","root","Thanzi@2001",{
    host:'localhost',
    dialect:'mysql'
})
const passenger = sequelize.define('passenger',{                     //to create table in database using sequelize
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    user_name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull: false,
        unique:true


    },
    password:{
        type:DataTypes.STRING(50),
        allowNull: false,
       


    },
    mobile_number:{
        type:DataTypes.INTEGER,
        allowNull: false,
       


    },
    address:{
        type:DataTypes.STRING(50),
        allowNull: false,
      


    },

    dob:{
        type:DataTypes.DATE,
        
        allowNull:false
    },
    
});
const booking_schedule = sequelize.define('booking_schedule',{

    choose_your_cab: {
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    
    
    date_of_booking: {
        type:DataTypes.DATE,
        allowNull:false,
    },
    date_of_travel:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    number_of_passengers:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

     pick_up_time:{
        type:DataTypes.TIME,
        allowNull:false,
     },




    pick_up_location:{
        type:DataTypes.STRING(50),
        allowNull: false,
     


    },
    drop_off_location:{
        type:DataTypes.STRING(50),
        allowNull: false,
        


    }
    


   
    
    
});










passenger.sync({alter:true}); 
booking_schedule.sync({alter:true});

passenger.create({name:'res',user_name:'reswebbb', email:'res@gmail.com',password:'1234',mobile_number:'45678',address:'house nn',dob:'2022-03-03'})    //to create a row
.then((passenger)=>{
    console.log("data saved:",user.toJSON());                    
})
.catch(passenger =>{  
    console.log("error");
});

