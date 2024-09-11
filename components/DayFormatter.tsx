import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

interface DateFormatterProps {
  isoString: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ isoString }) => {
  const timeZone = dayjs.tz.guess();
  const formattedDate = dayjs(isoString).tz(timeZone).format('MMMM D, YYYY, h:mm A');

  return <span>{formattedDate}</span>;
};

const FormattedDate: React.FC<DateFormatterProps> = ({ isoString }) => {
  return (
    <div>
      <DateFormatter isoString={isoString} />
    </div>
  );
};

export default FormattedDate;