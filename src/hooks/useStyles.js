import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    toolBar: {
      display: "flex",
      alignItems: "center",
    },
    searchBar: {
      boxSizing: "border-box",
      position: "relative",
      margin: "auto",
    },

    searchForm: {
      border: "1px solid #949499",
      borderRadius: "22px",
      height: "36px",
      padding: "1px",
      position: "static",
      display: "flex",
    },

    input: {
      border: "none",
      fontSize: "16px",
      borderRadius: "22px 0 0 22px",
      padding: "0 10px",
      color: "#000000",
      width: "300px",
    },

    serchButton: {
      border: "none",
      backgroundColor: "#ffc220",
      borderRadius: "0 22px 22px 0",
      padding: "5px 10px",
    },
  };
});

export default useStyles;
