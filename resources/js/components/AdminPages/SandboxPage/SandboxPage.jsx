import React, { Fragment } from 'react';
import { Avatar, Badge, Box, Button, ButtonBase, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { AppStoreSubscriber } from '../../../store/appStore';
import { makeStyles, useTheme } from '@mui/styles';
import { DataGrid as DataGrid1 } from '@mui/x-data-grid';
import DataGrid from 'react-data-grid';
import { CheckCircle, Delete, Edit, InfoOutlined } from '@mui/icons-material';
import { add, format } from 'date-fns';
const rows1 = [
  { id: 1, schedule: '05:00-14:00', label: '#463E3F-A', schedule_id: 1, legend: 'A', color: '#463E3F' },
  { id: 2, schedule: '22:30-07:30', label: '#ADAD24-AA', schedule_id: 27, legend: 'AA', color: '#ADAD24' },
  { id: 3, schedule: '09:30-18:30', label: '#212121-AB', schedule_id: 28, legend: 'AB', color: '#212121' },
  { id: 4, schedule: '02:00-11:00', label: '#FFA500-AC', schedule_id: 29, legend: 'AC', color: '#FFA500' },
  { id: 5, schedule: '02:00-10:00', label: '#0047AB-AI', schedule_id: 35, legend: 'AI', color: '#0047AB' },
  { id: 6, schedule: '04:00-13:00', label: '#FF581A-AJ', schedule_id: 36, legend: 'AJ', color: '#FF581A' },
  { id: 7, schedule: '19:00-04:00', label: '#62e8f7-AL', schedule_id: 40, legend: 'AL', color: '#62e8f7' },
  { id: 8, schedule: '17:00-02:00', label: '#49b1e5-AN', schedule_id: 42, legend: 'AN', color: '#49b1e5' },
  { id: 9, schedule: '08:30-17:30', label: '#ffd700-AO', schedule_id: 43, legend: 'AO', color: '#ffd700' },
  { id: 10, schedule: '16:00-01:00', label: '#000080-AP', schedule_id: 44, legend: 'AP', color: '#000080' },
  { id: 11, schedule: '00:00-09:00', label: '#551a8b-AQ', schedule_id: 45, legend: 'AQ', color: '#551a8b' },
  { id: 12, schedule: '00:00-08:30', label: '#660000-AS', schedule_id: 48, legend: 'AS', color: '#660000' },
  { id: 13, schedule: '02:00-10:30', label: '#FFA500-AT', schedule_id: 49, legend: 'AT', color: '#FFA500' },
  { id: 14, schedule: '05:00-13:30', label: '#463E3F-AU', schedule_id: 50, legend: 'AU', color: '#463E3F' },
  { id: 15, schedule: '06:00-14:30', label: '#848482-AV', schedule_id: 51, legend: 'AV', color: '#848482' },
  { id: 16, schedule: '08:00-16:30', label: '#EFE63B-AW', schedule_id: 52, legend: 'AW', color: '#EFE63B' },
  { id: 17, schedule: '09:00-17:30', label: '#F95757-AX', schedule_id: 53, legend: 'AX', color: '#F95757' },
  { id: 18, schedule: '13:30-22:00', label: '#00D8FF-AY', schedule_id: 54, legend: 'AY', color: '#00D8FF' },
  { id: 19, schedule: '15:30-00:00', label: '#FDB813-AZ', schedule_id: 55, legend: 'AZ', color: '#FDB813' },
  { id: 20, schedule: '06:00-15:00', label: '#848482-B', schedule_id: 2, legend: 'B', color: '#848482' },
  { id: 21, schedule: '21:30-06:00', label: '#AD3400-BA', schedule_id: 56, legend: 'BA', color: '#AD3400' },
  { id: 22, schedule: '22:00-06:30', label: '#ADAD24-BB', schedule_id: 57, legend: 'BB', color: '#ADAD24' },
  { id: 23, schedule: '12:00-20:30', label: '#95E501-BC', schedule_id: 59, legend: 'BC', color: '#95E501' },
  { id: 24, schedule: '21:00-05:30', label: '#0019FF-BD', schedule_id: 60, legend: 'BD', color: '#0019FF' },
  { id: 25, schedule: '23:00-07:30', label: '#660000-BE', schedule_id: 68, legend: 'BE', color: '#660000' },
  { id: 26, schedule: '05:30-14:00', label: '#ADAD24-BF', schedule_id: 69, legend: 'BF', color: '#ADAD24' },
  { id: 27, schedule: '20:00-04:30', label: '#FF0080-BG', schedule_id: 70, legend: 'BG', color: '#FF0080' },
  { id: 28, schedule: '21:30-05:00', label: '#EFE63B-BH', schedule_id: 71, legend: 'BH', color: '#EFE63B' },
  { id: 29, schedule: '01:00-09:30', label: '#FF0080-BI', schedule_id: 72, legend: 'BI', color: '#FF0080' },
  { id: 30, schedule: '03:00-12:00', label: '#FFA500-BJ', schedule_id: 73, legend: 'BJ', color: '#FFA500' },
  { id: 31, schedule: '15:00-23:30', label: '#EFE63B-BK', schedule_id: 74, legend: 'BK', color: '#EFE63B' },
  { id: 32, schedule: '01:00-10:00', label: '#AD3400-BL', schedule_id: 76, legend: 'BL', color: '#AD3400' },
  { id: 33, schedule: '18:00-03:00', label: '#4deeea-BM', schedule_id: 77, legend: 'BM', color: '#4deeea' },
  { id: 34, schedule: '06:30-15:30', label: '#f11eb3-BN', schedule_id: 78, legend: 'BN', color: '#f11eb3' },
  { id: 35, schedule: '07:00-16:00', label: '#488AC7-C', schedule_id: 3, legend: 'C', color: '#488AC7' },
  { id: 36, schedule: '08:00-17:00', label: '#A5A1F4-D', schedule_id: 4, legend: 'D', color: '#A5A1F4' },
  { id: 37, schedule: '09:00-18:00', label: '#81D8D0-E', schedule_id: 5, legend: 'E', color: '#81D8D0' },
  { id: 38, schedule: '10:00-19:00', label: '#728C00-F', schedule_id: 6, legend: 'F', color: '#728C00' },
  { id: 39, schedule: '11:00-20:00', label: '#347C2C-G', schedule_id: 7, legend: 'G', color: '#347C2C' },
  { id: 40, schedule: '12:00-21:00', label: '#E9AB17-H', schedule_id: 8, legend: 'H', color: '#E9AB17' },
  { id: 41, schedule: '13:00-22:00', label: '#DEB887-I', schedule_id: 9, legend: 'I', color: '#DEB887' },
  { id: 42, schedule: '14:00-23:00', label: '#7F462C-J', schedule_id: 10, legend: 'J', color: '#7F462C' },
  { id: 43, schedule: '15:00-00:00', label: '#C24641-K', schedule_id: 11, legend: 'K', color: '#C24641' },
  { id: 44, schedule: '20:00-05:00', label: '#4F29AA-L', schedule_id: 12, legend: 'L', color: '#4F29AA' },
  { id: 45, schedule: '21:00-06:00', label: '#0019FF-M', schedule_id: 13, legend: 'M', color: '#0019FF' },
  { id: 46, schedule: '13:00-21:30', label: '#E0D800-MA', schedule_id: 65, legend: 'MA', color: '#E0D800' },
  { id: 47, schedule: '18:00-02:30', label: '#000080-MD', schedule_id: 63, legend: 'MD', color: '#000080' },
  { id: 48, schedule: '07:00-15:30', label: '#EFE63B-ME', schedule_id: 64, legend: 'ME', color: '#EFE63B' },
  { id: 49, schedule: '03:30-12:00', label: '#49b1e5-MM', schedule_id: 61, legend: 'MM', color: '#49b1e5' },
  { id: 50, schedule: '09:30-18:00', label: '#FFA500-MN', schedule_id: 67, legend: 'MN', color: '#FFA500' },
  { id: 51, schedule: '22:00-07:00', label: '#008080-N', schedule_id: 14, legend: 'N', color: '#008080' },
  { id: 52, schedule: '23:00-08:00', label: '#810541-O', schedule_id: 15, legend: 'O', color: '#810541' },
  { id: 53, schedule: '23:30-08:30', label: '#064900-Y', schedule_id: 25, legend: 'Y', color: '#064900' },
];

const rows = [
  { id: 1, user_id: 1, user_account_id: 1276, last_name: 'Valdez', first_name: 'Reign mailto:mark', middle_name: 'barroga', gender: 'm', md5_company_email: '843e7bf18f01f00c090f8bbe9e3a05ef', md5_personal_email: '348c0e89e65c0694d3d05d0dba5a3021', company_email: 'rmbv@newmediastaff.com', personal_email: 'valdezreignmark', employee_id: 'PH22-001218', nickname: null, birthplace: null, birthdate: '1996-11-17', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 90, job_title_name: 'Messaging mailto:personnel', job_type_id: 8, job_type_name: 'r&f', department_id: 18, department_name: 'messaging', user_job_info_id: 1218, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'developer', clearance: 0 },
  { id: 2, user_id: 2, user_account_id: 242, last_name: 'abanag', first_name: 'abel', middle_name: '', gender: 'f', md5_company_email: '37e06517e3ef2492479756d29b5fcf72', md5_personal_email: '6a3abb21b4375d48371538db627ccccb', company_email: 'aabo@newmediastaff.com46', personal_email: 'noneofyourbusiness46', employee_id: 'PH22-000001', nickname: null, birthplace: null, birthdate: '1990-01-01', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 2, job_title_name: 'Admin-Finance Head', job_type_id: 1, job_type_name: 'executive', department_id: 8, department_name: 'Finance Department', user_job_info_id: 1, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: null, clearance: 2 },
  { id: 3, user_id: 3, user_account_id: 7, last_name: 'Abellera mailto:jr.', first_name: 'percival', middle_name: 'abogado', gender: 'm', md5_company_email: '6e3e4736ad7c1f2ce3adef874f3309f7', md5_personal_email: 'f15f0b43c7014b42f435209b89d22606', company_email: 'pa@newmediastaff.com', personal_email: 'chefnoodle', employee_id: 'PH22-000002', nickname: null, birthplace: null, birthdate: '1979-04-26', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 0, freelance: 1, city: null, job_title_id: 2, job_title_name: 'Admin-Finance Head', job_type_id: 1, job_type_name: 'executive', department_id: 8, department_name: 'Finance mailto:department', user_job_info_id: 2, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'regular', clearance: 0 },
  { id: 4, user_id: 4, user_account_id: 1209, last_name: 'abenales', first_name: 'emily', middle_name: 'juloya', gender: 'f', md5_company_email: '01135e3cac1c1432f7907ac3918e39c0', md5_personal_email: '178b673ecf41122b4c8fd65b9f70fa71', company_email: 'les@newmediastaff.com', personal_email: 'abenalesems28', employee_id: 'PH22-000003', nickname: null, birthplace: null, birthdate: '1998-03-28', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 0, fulltime: 0, freelance: 0, city: null, job_title_id: 2, job_title_name: 'Admin-Finance Head', job_type_id: 1, job_type_name: 'executive', department_id: 8, department_name: 'Finance Department', user_job_info_id: 3, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: '2022-08-15', anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: null, clearance: 2 },
  { id: 5, user_id: 5, user_account_id: 57, last_name: 'Abenoja', first_name: 'Adam mailto:andrei', middle_name: '', gender: '', md5_company_email: '23123sadadwa', md5_personal_email: '123ad123a', company_email: 'ab@newmediaservices.com.au1213', personal_email: 'noneofyourbusiness1213', employee_id: 'PH22-000004', nickname: null, birthplace: null, birthdate: '1990-01-01', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 0, fulltime: 1, freelance: 0, city: null, job_title_id: 3, job_title_name: 'Manager', job_type_id: 4, job_type_name: 'manager', department_id: 8, department_name: 'Finance mailto:department', user_job_info_id: 4, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: '2022-08-15', anniversary_date: '2022-08-11', job_status: 'probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'user', clearance: 1 },
  { id: 6, user_id: 6, user_account_id: 873, last_name: 'abia', first_name: 'jeralyn', middle_name: 'sumayang', gender: 'f', md5_company_email: 'a2a7a9e012dcf902f190ecd53fecbcff', md5_personal_email: '3d77c4f7ab043107f926cf0c0ff0da1a', company_email: 'jsa@newmediastaff.com', personal_email: 'jeralynabbyabia', employee_id: 'PH22-000005', nickname: null, birthplace: null, birthdate: '1994-09-24', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 2, job_title_name: 'Admin-Finance Head', job_type_id: 1, job_type_name: 'executive', department_id: 8, department_name: 'Finance Department', user_job_info_id: 5, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'regular', clearance: 0 },
  { id: 7, user_id: 7, user_account_id: 414, last_name: 'Abluyen', first_name: 'Claribel', middle_name: 'Bao- mailto:idang', gender: 'f', md5_company_email: '24a8141edcf28ef0059677ebe694d824', md5_personal_email: '9a50841ac867516935e719f65a18ccc8', company_email: 'cba@newmediastaff.com', personal_email: 'real_clierette', employee_id: 'PH22-000006', nickname: null, birthplace: null, birthdate: '1990-05-08', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 69, job_title_name: 'HR Manager', job_type_id: 4, job_type_name: 'manager', department_id: 9, department_name: 'Human Resources and Administrative Department', user_job_info_id: 6, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'user', clearance: 0 },
  { id: 8, user_id: 8, user_account_id: 1174, last_name: 'Abrenzosa', first_name: 'Maria mailto:elizabeth', middle_name: 'flores', gender: 'f', md5_company_email: '246952c69c23519590f92635dea617ba', md5_personal_email: '9e69b9969a6cfb8bb9523f811f7362a8', company_email: 'mefa@newmediastaff.com', personal_email: 'abrenzosamariaelizabeth', employee_id: 'PH22-000007', nickname: null, birthplace: null, birthdate: '1986-02-22', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 3, job_title_name: 'Manager', job_type_id: 4, job_type_name: 'manager', department_id: 8, department_name: 'Finance Department', user_job_info_id: 7, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'user', clearance: 0 },
  { id: 9, user_id: 9, user_account_id: 45, last_name: 'Abuan', first_name: 'Sandie mailto:lady', middle_name: 'bicol', gender: 'f', md5_company_email: '40bc5fe28f7d5ba6478f77bbbc811c63', md5_personal_email: '849fa1a28bc01366c9b6a971446e523e', company_email: 'sa@newmediaservices.com.au', personal_email: 'sandie07_lady', employee_id: 'PH22-000008', nickname: null, birthplace: null, birthdate: '1984-12-07', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 90, job_title_name: 'Messaging mailto:personnel', job_type_id: 8, job_type_name: 'r&f', department_id: 18, department_name: 'messaging', user_job_info_id: 8, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'admin', clearance: 0 },
  { id: 10, user_id: 10, user_account_id: 844, last_name: 'abuan', first_name: 'mharwin', middle_name: 'baldovino', gender: 'm', md5_company_email: 'd35589100e541d77b540ec6250cfb246', md5_personal_email: 'bbdae20313d5e290d1c01e4b4f1063d0', company_email: 'mbab@newmediastaff.com', personal_email: 'abuanmharwin09', employee_id: 'PH22-000010', nickname: null, birthplace: null, birthdate: '1995-11-25', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 174, job_title_name: 'Ukraine Project Manager', job_type_id: 4, job_type_name: 'manager', department_id: 42, department_name: 'NMS Ukraine', user_job_info_id: 10, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: null, clearance: 0 },
  { id: 12, user_id: 12, user_account_id: 261, last_name: 'Abubo', first_name: 'Aileen mailto:joy', middle_name: 'a.', gender: 'm', md5_company_email: '23123sadadwa', md5_personal_email: '123ad123a', company_email: 'acb@newmediastaff.com2325', personal_email: 'noneofyourbusiness2325', employee_id: 'PH22-000011', nickname: null, birthplace: null, birthdate: '1990-01-01', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: null, job_title_name: null, job_type_id: null, job_type_name: null, department_id: null, department_name: null, user_job_info_id: 11, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: null, clearance: 0 },
  { id: 13, user_id: 13, user_account_id: 1269, last_name: 'Acabado', first_name: 'Xandra mailto:mae', middle_name: 'filag', gender: 'f', md5_company_email: '2d44fb24f361391a1c9b4ea7b2bbff46', md5_personal_email: '9bdde3cf720fd906d42958629a87b199', company_email: 'xandra@nms.ph', personal_email: 'xandramaeacabado', employee_id: 'PH22-000012', nickname: null, birthplace: null, birthdate: '1998-08-25', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: 7, job_title_name: 'Accountant', job_type_id: 8, job_type_name: 'r&f', department_id: 8, department_name: 'Finance Department', user_job_info_id: 12, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: null, clearance: 0 },
  { id: 14, user_id: 14, user_account_id: 263, last_name: 'Acabado', first_name: 'Aileen mailto:maru', middle_name: 'a.', gender: 'm', md5_company_email: '23123sadadwa', md5_personal_email: '123ad123a', company_email: 'acd@newmediastaff.com2527', personal_email: 'noneofyourbusiness2527', employee_id: 'PH22-000013', nickname: null, birthplace: null, birthdate: '1990-01-01', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: null, job_title_name: null, job_type_id: null, job_type_name: null, department_id: null, department_name: null, user_job_info_id: 13, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: null, clearance: 0 },
  { id: 15, user_id: 15, user_account_id: 264, last_name: 'Aclopen', first_name: 'Aimee Gabrielle', middle_name: 'A. ', gender: 'm', md5_company_email: '23123sadadwa', md5_personal_email: '123ad123a', company_email: 'ace@nms.ph2628', personal_email: 'noneofyourbusiness2628', employee_id: 'PH22-000014', nickname: null, birthplace: null, birthdate: '1990-01-01', home_address: null, country: null, zip_code: null, nationality: null, marital_status: 'Single', status: 1, fulltime: 1, freelance: 0, city: null, job_title_id: null, job_title_name: null, job_type_id: null, job_type_name: null, department_id: null, department_name: null, user_job_info_id: 14, hired_date: '2022-08-11', joined_date: '2022-08-11', end_date: null, anniversary_date: '2022-08-11', job_status: 'Probationary', current_leaves_with_pay: 0, remaining_leaves: 0, role_name: 'regular', clearance: 0 }
];
const useStyles = makeStyles(() => ({
  legendChip: {
    color: 'white !important',
    fontSize: '13px !important',
    fontWeight: 500 + '!important',
    borderRadius: '4px !important'
  }
}));

export const SandboxPage = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const cols1 = [
    {
      field: 'label',
      headerName: 'Legend',
      disableColumnMenu: true,
      editable: false,
      flex: 0.4,
      valueFormatter: ({ value }) => {
        let data = value.split('-');
        return data[1];
      },
      renderCell: ({ row }) => {
        const { label } = row;
        let data = label.split('-');
        let color = data[0];
        let legend = data[1];
        return (
          <Chip label={legend} sx={{ backgroundColor: color }} className={classes.legendChip} />
        );
      },

    },
    {
      field: 'schedule',
      headerName: 'Time',
      disableColumnMenu: true,
      editable: false,
      flex: 0.4,
    },
    {
      field: 'description',
      headerName: 'Description',
      disableColumnMenu: true,
      editable: false,
      flex: 1,
    },
    {
      field: 'schedule_id',
      headerName: 'Action',
      disableColumnMenu: true,
      editable: false,
      sortable: false,
      filterable: false,

      disableExport: true,
      flex: 0.2,
      renderCell: ({ row }) => {
        const { schedule_id, legend, schedule, description } = row;
        const formatSched = schedule.split('-');
        const editValues = {
          schedule_id: schedule_id,
          legend: legend,
          start_time: formatSched[0],
          end_time: formatSched[1],
          description: description,
        };

        return (
          <Fragment>
            <Tooltip title={'Edit'} arrow>
              <IconButton onClick={() => console.log('console', row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Delete'} arrow>
              <IconButton onClick={() => console.log('console delete', row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Fragment>
        );
      },
    }

  ];
  const cols = [
    {
      key: 'md5_company_email', name: '', frozen: true, width: 3,
      formatter: (row) => {
        const initials = `${String(row.row.first_name)[0] || ''}${String(row.row.last_name)[0] || ''}`;
        return (
          <Fragment>
            <ButtonBase
              sx={{
                borderRadius: 10,
              }}
              onClick={() => {
                console.log('click me');
              }
              }>
              <Badge badgeContent={
                <Fragment>
                  <CheckCircle />
                </Fragment>
              }>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src={`https://www.gravatar.com/avatar/${row.row.md5_company_email}?&s=${40}&d=404`}
                >
                  {initials}
                </Avatar>
              </Badge>
            </ButtonBase>
          </Fragment>
        );
      }
    },
    {
      key: 'last_name', name: 'Name', frozen: true, width: 325,
      formatter: (row) => {
        const fullName = `${String(row.row.last_name) || ''}, ${String(row.row.first_name) || ''} ${String(row.row.middle_name).charAt(0) || ''}`;
       
        return (
          <Stack
            direction="row"
            spacing={1}
          >
            <Button
              style={{
                marginTop: 5,
                cursor: 'pointer',
                height: '30px'
              }}
              width='100%'
              onClick={() => {
                console.log('click hnadkleer');
              }}
            >
              {fullName}
            </Button>
            <Tooltip title="Open overview">
              <IconButton onClick={(event) => {
                console.log('hello', event);
              }}>
                <InfoOutlined />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      }

    },
    {
      key: 'job_status', name: 'Job Status', width: 300,
      formatter: (row) => {
        return (
          <Fragment><Chip value={row.row.job_status} /></Fragment>
        );
      }
    },
    {
      key: 'job_title_name', name: 'Job Title', width: 300,
      formatter: (row) => {
        return (
          <Fragment>
            <Tooltip title={row.row.job_title_name ?? 'none'}>
              <span>{row.row.job_title_name ?? 'none'}</span>
            </Tooltip>
          </Fragment>
        );
      }
    },
    {
      key: 'department_name', name: 'Department', width: 300,
      formatter: (row) => {
        return (
          <Fragment>
            <Tooltip title={row.row.department_name ?? 'No Department'}>
              <span>{row.row.department_name ?? 'No Department'}</span>
            </Tooltip>
          </Fragment>
        );

      }
    },
    {
      key: 'job_type_name', name: 'Position', width: 300,
      formatter: (row) => {
        const data = row.row.job_type_name ?? 'None';
        return (
          <Fragment>
            {data}
          </Fragment>
        );
      }
    },
    {
      key: 'hired_date', name: 'Date Hired', width: 300,
      formatter: (row) => {
        return (
          <Fragment>
            {row.row.hired_date
              ? format(new Date(row.row.hired_date == '0000-00-00' ? '1970-01-01' : row.row.hired_date), 'LLL dd, yyyy')
              : 'None'}
          </Fragment>
        );
      }
    },
    {
      key: 'joined_date', name: 'Renewal Date', width: 300,
      formatter: (row) => {
        return (
          <Fragment>
            {row.row.joined_date
              ? format(add(new Date(row.row.hired_date == '0000-00-00' ? '1970-01-01' : row.row.hired_date), { days: 180 }), 'LLL dd, yyyy')
              : 'None'}
          </Fragment>
        );
      }
    },
    {
      key: 'end_date', name: 'Date Ended', width: 300,
      formatter: (row) => {
        return (
          <Fragment>
            {row.row.end_date ? format(new Date(row.row.end_date), 'LLL dd, yyyy') : 'None'}
          </Fragment>
        );
      }
    },

  ];


  return (
    <AppStoreSubscriber>
      {({ contentBoxHeight, contentBoxWidth }) => (
        <Box height={contentBoxHeight} width={contentBoxWidth} sx={{ overflowY: 'auto', paddingTop: theme.props.topBarheight + 'px', paddingLeft: theme.props.drawerWidth + 'px' }}>
          <Typography>
            Play with me nicely0123123
          </Typography>

          <DataGrid1
            rows={rows1}
            columns={cols1}
          />
          <Typography>
            Play with me DataGrid Freeze
          </Typography>
          <DataGrid
            rows={rows}
            columns={cols}
          />
        </Box>
      )
      }
    </AppStoreSubscriber>

  );
};

