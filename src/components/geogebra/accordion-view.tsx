// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// components
import Iconify from 'src/components/iconify';
//
import imgFromBase from './images/from-base.png';
import imgToBase from './images/to-base.png';
import imgExpand from './images/expand.png';
import imgFitPoly from './images/fit-poly.png';
import imgstdevp from './images/stdevp.png';
import imgSDX from './images/sdx.png';
import imgSDY from './images/sdy.png';
import imgFitlineX from './images/fitlinex.png';
import imgFitline from './images/fitline.png';
import imgSpearman from './images/spearman.png';
import imgCorrelationCoefficient from './images/correlation-coefficient.png';
import imgRSquare from './images/rsquare.png';
import imgSigma from './images/sigma.png';

// ----------------------------------------------------------------------

type AccordionType = {
  id: number;
  heading: string;
  detail: React.ReactNode;
};

const phan_phoi_chuan: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối chuẩn là gì?',
    detail: (
      <div>
        <p>
          Phân phối chuẩn, còn gọi là phân phối Gauss hay hình chuông Gauss, là một phân phối xác
          suất có dạng tổng quát giống nhau, chỉ khác tham số vị trí (giá trị trung bình μ) và tỉ lệ
          (phương sai σ2)
        </p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối chuẩn',
    detail: (
      <div>
        <p>
          • Giá trị trung bình μ: Giá trị trung bình của phân phối, là điểm tập trung của phân phối.
        </p>
        <p>
          • Độ lệch chuẩn σ: Độ rộng của phân phối, là khoảng cách giữa giá trị trung bình và điểm
          cách xa 50% dữ liệu.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Đồ thị của phân phối chuẩn',
    detail: (
      <div>
        Đồ thị của phân phối chuẩn có dạng hình chuông, với đỉnh là giá trị trung bình μ. Khoảng
        68,26% dữ liệu nằm trong khoảng ±1σ của giá trị trung bình, khoảng 95,44% dữ liệu nằm trong
        khoảng ±2σ của giá trị trung bình, và khoảng 99,73% dữ liệu nằm trong khoảng ±3σ của giá trị
        trung bình,
      </div>
    ),
  },
];

const phan_phoi_student: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Student là gì?',
    detail: (
      <div>
        Phân phối Student, còn gọi là phân phối t-Student, là một phân phối xác suất liên tục, được
        sử dụng để mô tả dữ liệu thu thập từ một mẫu ngẫu nhiên, khi phương sai tổng thể của tổng
        thể chưa biết.
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Student',
    detail: (
      <p>
        Phân phối Student có hai tham số:
        <ul>
          <li>
            <strong>Giá trị trung bình μ:</strong> Giá trị trung bình của phân phối, là điểm tập
            trung của phân phối.
          </li>
          <li>
            <strong>Độ lệch chuẩn σ:</strong> Độ lệch chuẩn của tổng thể.
          </li>
        </ul>
      </p>
    ),
  },
  {
    id: 3,
    heading: 'Đồ thị của phân phối Student',
    detail: (
      <p>
        Đồ thị của phân phối Student có dạng hình chuông, với đỉnh là giá trị trung bình μ. Độ rộng
        của phân phối phụ thuộc vào cỡ mẫu n. Khi cỡ mẫu n càng lớn, phân phối Student càng giống
        với phân phối chuẩn.
      </p>
    ),
  },
];

const phan_phoi_chi_binh_phuong: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối chi-bình phương là gì?',
    detail: (
      <div>
        <p>
          Phân phối chi-bình phương là một phân phối xác suất liên tục, được sử dụng để mô tả tổng
          của các bình phương của các biến ngẫu nhiên chuẩn độc lập. Phân phối chi-bình phương có
          một tham số là bậc tự do (df), là số biến ngẫu nhiên độc lập trong tổng.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Các đặc điểm của phân phối chi-bình phương',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> df/2
          </li>
          <li>
            <strong>Phương sai:</strong> df
          </li>
          <li>
            <strong>Đồ thị:</strong> Đồ thị của phân phối chi-bình phương có dạng hình chuông, với
            đỉnh là giá trị trung bình. Độ rộng của phân phối phụ thuộc vào bậc tự do df. Khi bậc tự
            do df càng lớn, phân phối chi-bình phương càng giống với phân phối chuẩn.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_co_si: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Cô-si?',
    detail: (
      <p>
        Phân phối Cô-si là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu thập
        từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên được mô tả bởi một biến ngẫu nhiên góc.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Cô-si',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> 0
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> 1
          </li>
          <li>
            <strong>Độ lệch cực đại:</strong> 90
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_weibull: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Weibull?',
    detail: (
      <p>
        Phân phối Weibull là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu thập
        từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên có tính chất là thời gian đến sự kiện.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Weibull',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> 1/β
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> 1/β√α
          </li>
          <li>
            <strong>Độ cong:</strong> α
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_gamma: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối gamma?',
    detail: (
      <p>
        Phân phối gamma là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu thập
        từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên có tính chất là tổng của các biến ngẫu nhiên độc
        lập có phân phối chuẩn.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối gamma',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> shape / rate
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> shape / rate^(3/2)
          </li>
          <li>
            <strong>Shape</strong>: Một số thực dương, xác định hình dạng của phân phối.
          </li>
          <li>
            <strong>Rate</strong>: Một số thực dương, xác định vị trí của phân phối.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_log_normal: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Log Normal?',
    detail: (
      <p>
        Phân phối Log-Normal là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu
        thập từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên là logarit của một biến ngẫu nhiên có phân
        phối chuẩn.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Log-Normal',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Mean</strong>: Giá trị trung bình của biến ngẫu nhiên logarit.
          </li>
          <li>
            <strong>Standard deviation</strong>: Độ lệch chuẩn của biến ngẫu nhiên logarit.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_logistic: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Logistic?',
    detail: (
      <p>
        Phân phối Logistic là một phân phối xác suất liên tục, được sử dụng để mô tả dữ liệu thu
        thập từ một mẫu ngẫu nhiên, khi biến ngẫu nhiên có tính chất là xác suất của một sự kiện xảy
        ra.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Logistic',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Giá trị trung bình:</strong> Giá trị trung bình của phân phối, là điểm tập trung
            của phân phối.
          </li>
          <li>
            <strong>Độ lệch chuẩn:</strong> Độ rộng của phân phối, là khoảng cách giữa giá trị trung
            bình và điểm cách xa 50% dữ liệu.
          </li>
        </ul>
      </div>
    ),
  },
];

const phan_phoi_nhi_thuc: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối nhị thức?',
    detail: (
      <p>
        Phân phối nhị thức là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng thành
        công trong một chuỗi các thử nghiệm Bernoulli độc lập.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối nhị thức',
    detail: (
      <div>
        <ul>
          <li>
            <strong>N</strong>: Số lần thử nghiệm.
          </li>
          <li>
            <strong>P</strong>: Xác suất thành công của mỗi lần thử nghiệm.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối nhị thức có dạng sau:',
    detail: <p>P(X = k) = nCk * p^k * (1 - p)^(n - k)</p>,
  },
];

const phan_phoi_pascal: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Pascal?',
    detail: (
      <p>
        Phân phối Pascal là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng thành
        công trong một chuỗi các thử nghiệm Bernoulli độc lập, cho đến khi có k lần thất bại.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Pascal',
    detail: (
      <div>
        <ul>
          <li>
            <strong>K</strong>: Số lần thất bại.
          </li>
          <li>
            <strong>P</strong>: Xác suất thành công của mỗi lần thử nghiệm.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối Pascal có dạng sau:',
    detail: <p>P(X = k) = nCk-1 * p^k * (1 - p)^(n - k)</p>,
  },
];

const phan_phoi_poat_xong: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối Poisson?',
    detail: (
      <p>
        Phân phối Poisson là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng sự kiện
        xảy ra trong một khoảng thời gian hoặc không gian nhất định, khi xác suất xảy ra của mỗi sự
        kiện là không đổi.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối Poisson',
    detail: (
      <div>
        <ul>
          <li>
            <strong>Lambda</strong>: Số trung bình của các sự kiện xảy ra trong một khoảng thời gian
            hoặc không gian nhất định.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối Poisson có dạng sau:',
    detail: (
      <div>
        <p>
          Đồ thị của phân phối Poisson có dạng hình chuông, với đỉnh là (lambda, lambda *
          e^(-lambda)).
        </p>
      </div>
    ),
  },
];

const phan_phoi_sieu_boi: AccordionType[] = [
  {
    id: 1,
    heading: 'Phân phối siêu bội?',
    detail: (
      <p>
        Phân phối siêu bội là một phân phối xác suất rời rạc, được sử dụng để mô tả số lượng thành
        công trong một chuỗi các thử nghiệm Bernoulli độc lập, khi số lượng thành công tối đa được
        chỉ định.
      </p>
    ),
  },
  {
    id: 2,
    heading: 'Các tham số của phân phối siêu bội',
    detail: (
      <div>
        <ul>
          <li>
            <strong>N</strong>: Số lần thử nghiệm.
          </li>
          <li>
            <strong>K</strong>: Số thành công tối đa.
          </li>
          <li>
            <strong>P</strong>: Xác suất thành công của mỗi lần thử nghiệm.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm khối xác suất của phân phối siêu bội có dạng sau:',
    detail: <p>P(X = k) = nCk * p^k * (1 - p)^(n - k)</p>,
  },
];

const da_thuc_noi_suy: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm FitPoly()',
    detail: (
      <div>
        <img src={imgFitPoly} alt="fit-poly" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Tập hợp các điểm</li>
          <li>Bậc của đa thức nội suy</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Đa thức nội suy với bậc cho trước được tính toán dựa trên tập hợp các điểm đầu vào</p>
      </div>
    ),
  },
];

const do_lech_chuan: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm stdev()',
    detail: (
      <div>
        <img src={imgstdevp} alt="stdevp" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
          <li>Danh sách các tần số</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Kết quả tính độ lệch chuẩn của các số trong danh sách</p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm SDX()',
    detail: (
      <div>
        <img src={imgSDX} alt="sdx" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Trả về độ lệch chuẩn của tọa độ x của các điểm từ danh sách đã cho.</p>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm SDY()',
    detail: (
      <div>
        <img src={imgSDY} alt="sdy" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Trả về độ lệch chuẩn của tọa độ y của các điểm từ danh sách đã cho.</p>
      </div>
    ),
  },
];

const duong_hoi_quy: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Fitline()',
    detail: (
      <div>
        <img src={imgFitline} alt="fitline" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Tính toán đường hồi quy y trên x của các điểm.</p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm FitlineX()',
    detail: (
      <div>
        <img src={imgFitlineX} alt="fitlinex" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Tính toán đường hồi quy x trên y của các điểm.</p>
      </div>
    ),
  },
];

const chuyen_co_so: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm FromBase()',
    detail: (
      <div>
        <img src={imgFromBase} alt="from-base" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Số cần chuyển dạng text</li>
          <li>Hệ số tương ứng</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Hàm FromBase chuyển từ một số cho trước và một hệ cho trước sang hệ số 10</p>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm ToBase()',
    detail: (
      <div>
        <img src={imgToBase} alt="to-base" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Số nguyên dương dưới hệ cơ số 10</li>
          <li>Hệ số cần chuyển</li>
        </ul>
        <h4>Đầu ra:</h4>
        <p>Kết quả là số đã chuyển từ cơ số 10 sang cơ số đã cho</p>
      </div>
    ),
  },
];

const he_so_tuong_quan: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm Spearman()',
    detail: (
      <div>
        <img src={imgSpearman} alt="spearman" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
        </ul>
        <h4>Đầu ra:</h4>
        <ul>
          <li>
            Trả về hệ số tương quan xếp hạng của Spearman của tọa độ x và tọa độ y của các điểm
            trong danh sách.
          </li>
          <li>Trả về hệ số tương quan thứ hạng của Spearman của hai danh sách.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm CorrelationCoefficient()',
    detail: (
      <div>
        <img src={imgCorrelationCoefficient} alt="correlationcoefficient" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
          <li>Danh sách tọa độ x, danh sách tọa độ x</li>
        </ul>
        <h4>Đầu ra:</h4>
        <ul>
          <li>Tính hệ số tương quan mômen tích bằng cách sử dụng tọa độ của các điểm đã cho.</li>
          <li>
            Trả về hệ số tương quan xếp hạng của Spearman của tọa độ x và tọa độ y của các điểm
            trong danh sách.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm RSquare()',
    detail: (
      <div>
        <img src={imgRSquare} alt="rsquare" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
          <li>Hàm cho trước</li>
        </ul>
        <h4>Đầu ra:</h4>
        <ul>
          <li>
            Tính hệ số xác định R² = 1 - SSE/Syy, giữa giá trị y của các điểm trong danh sách và giá
            trị hàm của giá trị x trong danh sách.
          </li>
        </ul>
      </div>
    ),
  },
];

const xich_ma: AccordionType[] = [
  {
    id: 1,
    heading: 'Hàm SigmaXX()',
    detail: (
      <div>
        <img src={imgSigma} alt="sigma" />
        <h4>Đầu vào:</h4>
        <ul>
          <li>Danh sách các điểm</li>
          <li>Danh sách các số</li>
        </ul>
        <h4>Đầu ra:</h4>
        <ul>
          <li>Tính tổng các tích của tọa độ x và y.</li>
          <li>Tính tổng từ các số cho trước</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    heading: 'Hàm SigmaXY()',
    detail: (
      <div>
        <p>Tương tự SigmaXX()</p>
      </div>
    ),
  },
  {
    id: 3,
    heading: 'Hàm SigmaYY()',
    detail: (
      <div>
        <p>Tương tự SigmaYY()</p>
      </div>
    ),
  },
];

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function AccordionView(props: Props) {
  const { id } = props;

  const renderContent = (idInput: string, val: AccordionType[]) => {
    return (
      <>
        {id === idInput && (
          <>
            {val.map((item, index) => (
              <Accordion key={item.id} disabled={index === 3}>
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography variant="subtitle1">{item.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <Container sx={{ my: 2 }}>
      <Stack spacing={2}>
        {renderContent(Object.keys({ phan_phoi_chuan })[0].replace(/_/g, '-'), phan_phoi_chuan)}
        {renderContent(Object.keys({ phan_phoi_student })[0].replace(/_/g, '-'), phan_phoi_student)}
        {renderContent(
          Object.keys({ phan_phoi_chi_binh_phuong })[0].replace(/_/g, '-'),
          phan_phoi_chi_binh_phuong
        )}
        {renderContent(Object.keys({ phan_phoi_co_si })[0].replace(/_/g, '-'), phan_phoi_co_si)}
        {renderContent(Object.keys({ phan_phoi_weibull })[0].replace(/_/g, '-'), phan_phoi_weibull)}
        {renderContent(Object.keys({ phan_phoi_gamma })[0].replace(/_/g, '-'), phan_phoi_gamma)}
        {renderContent(
          Object.keys({ phan_phoi_log_normal })[0].replace(/_/g, '-'),
          phan_phoi_log_normal
        )}
        {renderContent(
          Object.keys({ phan_phoi_logistic })[0].replace(/_/g, '-'),
          phan_phoi_logistic
        )}
        {renderContent(
          Object.keys({ phan_phoi_nhi_thuc })[0].replace(/_/g, '-'),
          phan_phoi_nhi_thuc
        )}
        {renderContent(Object.keys({ phan_phoi_pascal })[0].replace(/_/g, '-'), phan_phoi_pascal)}
        {renderContent(
          Object.keys({ phan_phoi_poat_xong })[0].replace(/_/g, '-'),
          phan_phoi_poat_xong
        )}
        {renderContent(
          Object.keys({ phan_phoi_sieu_boi })[0].replace(/_/g, '-'),
          phan_phoi_sieu_boi
        )}
        {renderContent(Object.keys({ da_thuc_noi_suy })[0].replace(/_/g, '-'), da_thuc_noi_suy)}
        {renderContent(Object.keys({ do_lech_chuan })[0].replace(/_/g, '-'), do_lech_chuan)}
        {renderContent(Object.keys({ duong_hoi_quy })[0].replace(/_/g, '-'), duong_hoi_quy)}
        {renderContent(Object.keys({ chuyen_co_so })[0].replace(/_/g, '-'), chuyen_co_so)}
        {renderContent(Object.keys({ he_so_tuong_quan })[0].replace(/_/g, '-'), he_so_tuong_quan)}
        {renderContent(Object.keys({ xich_ma })[0].replace(/_/g, '-'), xich_ma)}
      </Stack>
    </Container>
  );
}
