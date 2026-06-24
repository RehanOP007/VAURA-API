import Admin from "./AdminManagement/AdminManagementApi.json";
import Auth from "./Authentication/AuthenticationApi.json";
import Bank from "./Bank/BankApi.json";
import Branch from "./BranchManagement/BranchManagementApi.json";
import ComProfile from "./CompanyProfile/CompanyProfileApi.json";
import Department from "./Department/DepartmentApi.json";
import Designation from "./Designation/DesignationApi.json";
import Shift from "./WorkShift/WorkShiftApis.json";
import Asset from "./Asset/AssetApi.json";
import Policy from "./LeavePolicy/LeavePolicyApi.json";
import Holiday from "./Holiday/HolidayApi.json";
import Employee from "./Employees/EmployeeApi.json";
import EmployeeBankAccount from "./Employees/EmployeeBankAccountApi.json";
import EmployeeAssetManagement from "./Employees/EmployeeAssetManagementApi.json";
import EmployeeDepartment from "./Employees/EmployeeDepartmentApi.json";
import EmployeeDesignationManagement from "./Employees/EmployeeDesignationManagementApis.json";
import EmployeeLeaveManagement from "./Employees/EmployeeLeavePolicyApi.json";
import EmployeeShiftManagement from "./Employees/EmployeeShiftManagementApi.json";
import EmployeeNote from "./Employees/EmployeeNoteApi.json";
import WorkFromHome from "./WorkFromHome/WfhManagementApi.json";
import WFHRequest from "./WorkFromHome/WorkFromHomeRequestApi.json";
import AttendenceManagement from "./Attendence/AttendenceManagementApi.json";
import QrAttendance from "./Attendence/QrAttendance.json";
import OwnAttendance from "./Attendence/EmployeeOwnAttendance.json";
import ManagerDepartmentAttendance from "./Attendence/ManagerDepartmentApi.json";
import LeaveRequestManagement from "./LeavePolicy/LeaveRequestManagementApi.json";
import DigitalPresence from "./DigitalPresence/DigitalPresenceApi.json";
import AdminJobOpenings from "./DigitalPresence/AdminJobOpeningManagementApi.json";
import PublicCandidate from "./RecruitmentDocumentApi/PublicCandidateApi.json";
import EmployeeReportDoc from "./RecruitmentDocumentApi/EmployeeReportDocumentationApi.json";
import AdminMeeting from "./RecruitmentDocumentApi/AdminMeetingApi.json";
import AdminCandidate from "./RecruitmentDocumentApi/AdminCandidateApi.json";
import BiometricIntergration from "./BiometricIntergration/BiometricIntergrationApi.json";
import BiometricEmployee from "./BiometricIntergration/BiometricEmployeeApi.json";

const apiData = [
  {
    category: "Authentication",
    apis: Auth.apis,
  },
  {
    category: "Admin Management",
    apis: Admin.apis,
  },
  {
    category: "Company Profile",
    apis: ComProfile.apis,
  },
  {
    category: "Department",
    apis: Department.apis,
  },
   {
    category: "Bank",
    apis: Bank.apis ,
  },
  {
    category: "Branch Management",
    apis: Branch.apis,
  },
  {
    category: "Designation",
    apis: Designation.apis,
  },
  {
    category: "Work Shift",
    apis: Shift.apis,
  },
   {
    category: "Asset",
    apis: Asset.apis,
  },
  {
    category: "Leave Policy",
    apis:[ Policy.apis,
      ...LeaveRequestManagement.apis,
    ],
    subModules: [
      {
        name: "Leave Policy APIs",
        apis: Policy.apis,
      },
      {
        name: "Leave Request Management APIs",
        apis: LeaveRequestManagement.apis,
      }
    ]
  },
  {
    category: "Holiday",
    apis: Holiday.apis,
  },
  {
  category: "Employee",
  apis: [
    ...Employee.apis,
    ...EmployeeBankAccount.apis,
    ...EmployeeAssetManagement.apis,
    ...EmployeeDepartment.apis,
    ...EmployeeDesignationManagement.apis,
    ...EmployeeLeaveManagement.apis,
    ...EmployeeShiftManagement.apis,
    ...EmployeeNote.apis,
  ],
  subModules: [
    {
      name: "Employee Management",
      apis: Employee.apis,
    },
    {
      name: "Bank Accounts",
      apis: EmployeeBankAccount.apis,
    },
    {
      name: "Asset Management",
      apis: EmployeeAssetManagement.apis,
    },
    {
      name: "Departments",
      apis: EmployeeDepartment.apis,
    },
    {
      name: "Designations",
      apis: EmployeeDesignationManagement.apis,
    },
    {
      name: "Leave Management",
      apis: EmployeeLeaveManagement.apis,
    },
    {
      name: "Shift Management",
      apis: EmployeeShiftManagement.apis,
    },
    {
      name: "Employee Notes",
      apis: EmployeeNote.apis,
    }
  ],
},
  {
    category: "Work From Home",
    apis:[...WorkFromHome.apis, ...WFHRequest.apis],
      subModules: [
        {
          name: "Work From Home APIs",
          apis: WorkFromHome.apis,
       },
         {
          name: "WFH Request Management APIs",
          apis: WFHRequest.apis,
       },
      ],
  },
  {
    category: "Attendence",
    apis: [AttendenceManagement.apis, 
      ...QrAttendance.apis, 
      ...OwnAttendance.apis, 
      ...ManagerDepartmentAttendance.apis],
    subModules: [
      {
        name: "Attendence Management APIs",
        apis: AttendenceManagement.apis,
      },
      {
        name: "QR Attendance APIs",
        apis: QrAttendance.apis,
      },
      {
        name: "Employee Own Attendance APIs",
        apis: OwnAttendance.apis,
      },
      {
        name: "Manager Department Attendance APIs",
        apis: ManagerDepartmentAttendance.apis,
      }
    ]
  },
  {
    category: "Digital Presence",
    apis: [DigitalPresence.apis, 
      ...AdminJobOpenings.apis],
    subModules: [
      {
        name: "Digital Presence APIs",
        apis: DigitalPresence.apis,
      },
      {
        name: "Admin Job Openings APIs",
        apis: AdminJobOpenings.apis,
      }
    ],
  },
  {
    category: "Recruitment Document",
    apis: [
      ...PublicCandidate.apis,
      ...EmployeeReportDoc.apis,
      ...AdminMeeting.apis,
      ...AdminCandidate.apis
    ],
    subModules: [
      {
        name: "Public Candidate APIs",
        apis: PublicCandidate.apis,
      },
      {
        name: "Employee Report Documentation APIs",
        apis: EmployeeReportDoc.apis,
      },
      {
        name: "Admin Meeting APIs",
        apis: AdminMeeting.apis,
      },
      {
        name: "Admin Candidate APIs",
        apis: AdminCandidate.apis,
      }
    ]
  },
  {
    category: "Biometric",
    apis: [...BiometricIntergration.apis, ...BiometricEmployee.apis],
    subModules: [
      {
        name: "Biometric Integration APIs",
        apis: BiometricIntergration.apis,
      },
      {
        name: "Biometric Employee APIs",
        apis: BiometricEmployee.apis,
      }
    ]
  },
];

export default apiData;