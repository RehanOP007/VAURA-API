import Admin from "./AdminManagementApi.json";
import Auth from "./AuthenticationApi.json";
import Bank from "./BankApi.json";
import Branch from "./BranchManagementApi.json";
import ComProfile from "./CompanyProfileApi.json";
import Department from "./DepartmentApi.json";
import Designation from "./DesignationApi.json";
import Shift from "./WorkShiftApis.json";
import Asset from "./AssetApi.json";
import Policy from "./LeavePolicyApi.json";
import Holiday from "./HolidayApi.json";

const apiData = [
  ...Admin,
  ...Auth,
  ...Bank,
  ...Branch,
  ...ComProfile,
  ...Department,
  ...Designation,
  ...Shift,
  ...Asset,
  ...Policy,
  ...Holiday,
];

export default apiData;