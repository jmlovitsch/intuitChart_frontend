import React, { useState } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTime = ({ date, handleDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <DatePicker

      selected={date}
      onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
      className="form-control"
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DateTime);
