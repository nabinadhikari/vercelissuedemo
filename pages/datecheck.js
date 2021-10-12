import moment from 'moment';
export default function Date() {
    const cDate1 = "08May21";
    const date1 = moment(cDate1);
    const date2 = moment(cDate1, 'DDMMMYY', false);
    console.log({ date1, cDate1 });
    const DATE_FORMAT = 'DD MMM YY';
    return (
        <div>
            <h1>Date issue try</h1>
            {cDate1} : {date1.format(DATE_FORMAT)},
            {date2.format(DATE_FORMAT)}
            <br />
            Current time {moment().format(DATE_FORMAT)}
        </div>
    );
}