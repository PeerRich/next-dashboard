import React, {useState, useEffect, useCallback} from "react";
import axios from "../src/utils/axios";
import {Box, Container, makeStyles} from "@material-ui/core";
import Header from "../src/components/Header";
import Page from "../src/components/Page";
import Results from "../src/components/invoices/Results";
import useIsMountedRef from "../src/hooks/useIsMountedRef";
import DashboardLayout from "../src/components/DashboardLayout";
// import { v4 as uuidv4 } from "uuid";
// import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f6f8", //theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: 100,
  },
}));

export default function Invoices() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = useState(null);

  const getInvoices = useCallback(() => {
    axios.get("/api/management/invoices").then((response) => {
      if (isMountedRef.current) {
        console.log(response.data.invoices)
        setInvoices(response.data.invoices);
      }
    });
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  if (!invoices) {
    return null;
  }
  console.log(Results);
  return (
    <Page className={classes.root} title="Invoice List">
      <Container maxWidth={false}>
        <DashboardLayout>
          <Header className="header"/>
          {invoices && (
            <Box mt={3}>
              {/* {invoices.toString()} */}
              <Results invoices={invoices}/>
            </Box>
          )}
        </DashboardLayout>
      </Container>
    </Page>
  );
}
