import moment from 'moment';
export default function Date() {
    const cDate1 = "08May21";
    const date1 = moment(cDate1);
    return (
        <div>
            <h1>Date issue try</h1>
            {cDate1} : {date1.format('DD MMM YY')}
        </div>
    );
}