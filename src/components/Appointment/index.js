import React from 'react';
import Header from "components/Appointment/header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import "components/Appointment/style.scss";

export default function Appointment(props) {
  return(
<article className="appointment">
  <Header time={props.time} />
  { props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/> : <Empty />}
</article>
  )
}