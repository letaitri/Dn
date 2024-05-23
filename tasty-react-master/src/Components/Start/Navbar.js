import React, { useContext, useState } from "react";
import Logo from "../Assets/Logo.svg";
import cart_icon from "../Assets/cart_icon.png"
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Home from "../Start/Home";
import '../style/navbar.css'

import { NavLink } from "react-router-dom";
import { Context } from "../../Context/Context";

const Navbar = () => {
  // const [openMenu, setOpenMenu] = useState(Home);
  const [menu,setMenu] = useState(Home);
  const {getTotalCartItems} = useContext(Context)
  // const menuOptions = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     text: "About",
  //     icon: <InfoIcon />,
  //   },
  //   {
  //     text: "Testimonials",
  //     icon: <CommentRoundedIcon />,
  //   },
  //   {
  //     text: "Contact",
  //     icon: <PhoneRoundedIcon />,
  //   },
  //   {
  //     text: "Cart",
  //     icon: <ShoppingCartRoundedIcon />,
  //   },
  // ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}>
        <NavLink style={{textDecoration:'none'}} to= '/'>  HOME </NavLink>  {menu==="Home"?<hr/>:<></>}  </li>
        <li onClick={()=>{setMenu("information")}}>
        <NavLink style={{textDecoration:'none'}} to= '/information'>HOT</NavLink>  {menu==="information"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("menu")}}>
        <NavLink style={{textDecoration:'none'}} to= '/menu'>MENU</NavLink>  {menu==="menu"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("hostline")}}>
        <NavLink style={{textDecoration:'none'}} to= '/hostline'>LIÊN HỆ</NavLink>  {menu==="hostline"?<hr/>:<></>} </li>

        <div className="nav-login-cart">
            <NavLink  to='/dangnhap'><button>LOGIN</button></NavLink> 
                <NavLink to='/cart'><img src={cart_icon} alt=""/> </NavLink>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
</ul>
       {/* <BsCart2 className="navbar-cart-icon" />
      <button className="primary-button" to='/login'> ĐẶT NGAY</button> */}

      </div>
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {/* <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
          {/* <Divider />
        </Box>
      </Drawer> */} 
    </nav>
  );
};

export default Navbar;