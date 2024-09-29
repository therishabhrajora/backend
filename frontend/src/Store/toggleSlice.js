import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        restrodropdown: false,
        sidebar:false,
        restro:false,
        partner:false,
        company:false,
        questionOne:false,
        questiontwo:false,
        questionthree:false,
        questionfour:false,
        questionfive:false,
        indiaSidebar:false,
        activeDinnig:false,
        activeDelivery:false,
        openfilter:false,
        openlogin:false,
        opensignup:false,
        city:"",
    },
    reducers: {
        openRestrodropdown: (state, action) => {
            state.restrodropdown=!state.restrodropdown;
        },
        opensidebar:(state,action)=>{
            state.sidebar=true;
        },
        closesidebar:(state,action)=>{
            state.sidebar=false;
        },
        toggleRestro:(state,action)=>{
            console.log("rstro")
            state.restro=!state.restro;
        },
        togglepartner:(state,action)=>{
            console.log("rstro")
            state.partner=!state.partner;
        },
        togglecompany:(state,action)=>{
            console.log("partner");
            state.company=!state.company;
        },
        toggleOne:(state,action)=>{
            console.log("first")
            state. questionOne=!state. questionOne;
        },
        toggletwo:(state,action)=>{
            state. questiontwo=!state. questiontwo;
        },
        togglethree:(state,action)=>{
            state. questionthree=!state. questionthree;
        },
        togglefour:(state,action)=>{
            state. questionfour=!state. questionfour;
        },
        togglefive:(state,action)=>{
            state. questionfive=!state. questionfive;
        },
        openIndiaSidebar:(state,action)=>{
            state.indiaSidebar=true;
        },
        hideIndiaSidebar:(state,action)=>{
            state.indiaSidebar=false;
        },
        setCity:(state,action)=>{
            state.city=action.payload;
        },
        setActiveDinning:(state,action)=>{
            state.activeDinnig=true;
        },
        setInactiveDinnig:(state,action)=>{
            state.activeDinnig=false;
        },
        setActiveDelivery:(state,action)=>{
            state.activeDelivery=true;
        },
        setInactiveDelivery:(state,action)=>{
            state.activeDelivery=false;
        },
        Onopenfilter:(state,action)=>{
            console.log("click filter")
            state.openfilter=true;
        },
        closeopenfilter:(state,action)=>{
            console.log("close filter")
            state.openfilter=false;
        },
        openlogin:(state,action)=>{
            state.openlogin=true;
        },
        closelogin:(state,action)=>{
            state.openlogin=false;
        },
        opensignup:(state,action)=>{
            state.opensignup=true;
        },
        closesignup:(state,action)=>{
            state.opensignup=false;
        }
    }
})

export const toggleActions = toggleSlice.actions;


export default toggleSlice;