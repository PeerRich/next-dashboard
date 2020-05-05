import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import axios from '../src/utils/axios';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Header from '../src/components/Header';
import Page from '../src/components/Page';
import Results from '../src/components/invoices/Results';
import useIsMountedRef from '../src/hooks/useIsMountedRef';
import {v4 as uuidv4} from "uuid";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc", //theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

export default function Invoices() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = useState(/*null

  TODO: fix mock API */
    {
      invoices: [
        {
          id: uuidv4(),
          date: moment()
            .toDate()
            .getTime(),
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          paymentMethod: 'Credit Card',
          value: '5.25',
          currency: '$',
          status: 'paid'
        },
        {
          id: uuidv4(),
          date: moment()
            .toDate()
            .getTime(),
          description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
          paymentMethod: 'Credit Card',
          value: '5.25',
          currency: '$',
          status: 'paid'
        }
      ]
    }
    );

  const getInvoices = useCallback(() => {
    axios
      .get('/api/management/invoices')
      .then((response) => {
        if (isMountedRef.current) {
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

  return (
    <Page
      className={classes.root}
      title="Invoice List">
      <Container maxWidth={false}>
        <Header className="header"/>
        {invoices && (
          <Box mt={3}>
            <Results className="results" invoices={invoices}/>
          </Box>
        )}
      </Container>
    </Page>
  );
}
