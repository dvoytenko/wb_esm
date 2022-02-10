
  import m_1 from './m_1.js';
import m_2 from './m_2.js';
import m_3 from './m_3.js';
import m_4 from './m_4.js';
import m_5 from './m_5.js';
import m_6 from './m_6.js';
import m_7 from './m_7.js';
import m_8 from './m_8.js';
import m_9 from './m_9.js';
import m_10 from './m_10.js';
import m_11 from './m_11.js';
import m_12 from './m_12.js';
import m_13 from './m_13.js';
import m_14 from './m_14.js';
import m_15 from './m_15.js';
import m_16 from './m_16.js';
import m_17 from './m_17.js';
import m_18 from './m_18.js';
import m_19 from './m_19.js';
import m_20 from './m_20.js';

  performance.mark('start_script');

  const props = {c: '[[C]]'};

  const all = [
    m_1(props),m_2(props),m_3(props),m_4(props),m_5(props),m_6(props),m_7(props),m_8(props),m_9(props),m_10(props),m_11(props),m_12(props),m_13(props),m_14(props),m_15(props),m_16(props),m_17(props),m_18(props),m_19(props),m_20(props)
  ].join('\n\n');

  root.textContent = 'Total length: ' + all.length;
  // console.log(all.length);
  // console.log(all);

  performance.mark('end_script');
