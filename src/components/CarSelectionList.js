// import { makeStyles } from "@material-ui/core/styles";
import CarSelectionItem from "./CarSelectionItem";
import { useQuery } from "@apollo/client";
import { CAR_OPTIONS } from "../graphql/queries";
import { useLocation } from "react-router";

// const useStyles = makeStyles({});

export default function TripSummary() {
//   const classes = useStyles();
  const location = useLocation();
  
  const { loading, error, data } = useQuery(CAR_OPTIONS, {
    variables: {
      booking: {
       ...location.state[0].booking
      },
    },
  });

  return (
    <>
      {loading ? "Please Wait" : ""}
      {error ? `Something went wrong: ${error.stack}` : ""}
      {data
        ? data.carOptions.map((option, index) => (
            <CarSelectionItem key={index} optionItem={option}/>
          ))
        : ""}
    </>
  );
}
