import * as React from 'react';
import { getInitials } from '../../utils/get-initials';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

export const BenefitEmployeeListResults = ({ benefits, ...rest }) => {
  const router = useRouter();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (benefit) => {
    sessionStorage.setItem("benefitName", benefit.benefitName);
    sessionStorage.setItem("projectName", benefit.projectName);
    sessionStorage.setItem("employerID", benefit.employerID);
    sessionStorage.setItem("employeeID", benefit.employeeID);
    sessionStorage.setItem("description", benefit.description);
    sessionStorage.setItem("cost", benefit.cost);
    sessionStorage.setItem("startDate", benefit.startDate);
    setOpen(true);
  };

  const handleClose = (agreed) => {
    setOpen(false);
    if (agreed === true) {
      var data = {
        benefitName: sessionStorage.getItem("benefitName"),
        projectName: sessionStorage.getItem("projectName"),
        employerID: sessionStorage.getItem("employerID"),
        employeeID: sessionStorage.getItem("employeeID"),
        description: sessionStorage.getItem("description"),
        cost: sessionStorage.getItem("cost"),
        startDate: sessionStorage.getItem("startDate"),
        endDate: ""
      };
      axios.update(URL + 'unsubscribeBenefit', data)
        .then(function () {
          alert("Benefit successfully unsubscribed");
          window.location.reload(false);
        })
        .catch(function (error) {
          if (error.response) {
            alert("Error: Unknown error occurred");
          }
          window.location.reload(false);
        });
    }
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Value
                </TableCell>
                <TableCell>
                  Start date
                </TableCell>
                <TableCell>
                  End date
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {benefits.slice(page * limit, page * limit + limit).map(benefit => (
                <TableRow
                  hover
                  key={benefit.benefitName + benefit.projectName + benefit.employerID}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={benefit.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(benefit.benefitName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {benefit.benefitName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {benefit.description}
                  </TableCell>
                  <TableCell>
                    {"$" + benefit.cost}
                  </TableCell>
                  <TableCell>
                    {benefit.startDate}
                  </TableCell>
                  <TableCell>
                    {benefit.endDate}
                  </TableCell>
                  <TableCell>
                      <IconButton aria-label="delete" color="error" onClick={() => handleClickOpen(benefit)}>
                        <DeleteForeverIcon />
                      </IconButton>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Alert: Please read!!!"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            You are about to unsubscribe from a benefit. Are you sure?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} variant="outlined" color="primary">Cancel</Button>
                          <Button onClick={() => handleClose(true)} variant="contained" color="error">Unsubscribe</Button>
                        </DialogActions>
                      </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={benefits.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

BenefitEmployeeListResults.propTypes = {
  benefits: PropTypes.array.isRequired
};
