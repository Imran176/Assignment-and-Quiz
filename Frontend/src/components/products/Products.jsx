import React from "react";
import SingleProduct from "./SingleProduct";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./../../services/ProductsService";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const {types} = props;
  const {show} = props;
  
  const getData = () => {
    productService
      .getProducts()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  // console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/products/new");
  };
  return (
    <div>
      <h1 style={{textAlign:'center', fontSize:'3rem', color: 'red', marginTop:'30px', marginBottom:'30px'}}>Available Rooms</h1>

      {userService.isLoggedIn() && (
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}
      {products.length == 0 ? (
        <p>There are no Room Available at this movement</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} type={types} show={show} onDelete={getData} />
          ))}
        </Grid>
      )}

    </div>
  );
};

export default Products;
