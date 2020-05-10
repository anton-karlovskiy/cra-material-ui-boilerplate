
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const WellIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 32} height={height || 32} viewBox={viewBox || '0 0 32 32'} color={color} {...rest}>
    <path fill={color} fillRule='evenodd' d='M30 5.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3-1.6 0-2.9 1.2-3 2.8l-7.9 2.1c-1.6-1.6-4.3-.8-5 1.3l-7 1.9c0-.8.1-1.7.5-2.5.2-.5 0-1-.4-1.2L2.7 2.3c-.5-.3-1.2-.1-1.4.4C0 5.2-.3 8 .4 10.8c.7 2.7 2.2 5.1 4.5 6.8.5.4 1.2.2 1.5-.3l2.1-3.4c.3-.4.2-1-.2-1.3-.8-.7-1.4-1.5-1.7-2.5l6.8-1.8L7.3 29H0v3h32v-3h-2V5.8zm-9 21.8L17.4 24l2-2 1.6 5.6zM17.9 17h-3.8l1.9-6.6 1.9 6.6zm.6 2l.2.9-2.7 2.7-2.8-2.8.2-.8h5.1zm-5.9 3l2 2-3.6 3.6 1.6-5.6zm3.4 3.4l3.6 3.6h-7.2l3.6-3.6zm2.7-17c.3-.6.3-1.1.3-1.6l7.6-2c.4.5.9.9 1.4 1.1V29h-3.3l-6-20.6z' />
  </SvgIconWrapper>
);

export default WellIcon;
