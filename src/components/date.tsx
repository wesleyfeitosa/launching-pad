import React from 'react';
import { parseISO, format } from 'date-fns';
import brLocale from 'date-fns/locale/pt-BR';

interface DateData {
  dateString: string;
}

const Date: React.FC<DateData> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d 'de' LLLL, yyyy 'horário: 'HH:mm", { locale: brLocale })}
    </time>
  );
};

export default Date;
