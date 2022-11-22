const{Sequelize, DataTypes}=require('sequelize')                 
const sequelize = new Sequelize("cabservicemanagement","root","Thanzi@2001",{
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
        unique:true


    },
    mobile_number:{
        type:DataTypes.STRING(50),
        allowNull: false,
        unique:true


    },
    address:{
        type:DataTypes.STRING(50),
        allowNull: false,
        unique:true


    },

    dob:{
        type:DataTypes.DATE,
        
        allowNull:false
    },
    
});
passenger.sync({alter:true}); 

passenger.create({name:'res',user_name:'reswebbb', email:'res@gmail.com',password:'1234',mobile_number:'45678',address:'house nn',dob:'2022-03-03'})    //to create a row
.then((passenger)=>{
    console.log("data saved:",user.toJSON());                    
})
.catch(passenger =>{  
    console.log("error");
});

