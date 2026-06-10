import './App.css';
import { useState } from 'react';

function App() {
  const students = [
  "Rahul","Amit","Priya","Neha","Mohit","Ankit","Rohit","Suman","Pooja","Kiran",
  "Deepak","Vikas","Nitin","Rakesh","Manoj","Sandeep","Ajay","Vijay","Sunil","Anil",
  "Rajesh","Mukesh","Dinesh","Mahesh","Yogesh","Suresh","Naresh","Ravi","Arun","Varun",
  "Tarun","Kunal","Kapil","Sachin","Harsh","Aakash","Abhishek","Shubham","Aditya","Yash",
  "Krishna","Gaurav","Pankaj","Prashant","Naveen","Lokesh","Hemant","Umesh","Ranjit","Vinay",
  "Ritu","Kavita","Anjali","Sneha","Meena","Rekha","Komal","Nisha","Shweta","Riya",
  "Simran","Payal","Aarti","Muskan","Khushi","Jyoti","Pallavi","Swati","Sakshi","Tanu",
  "Tina","Rashmi","Monika","Preeti","Poonam","Ishita","Nandini","Anu","Madhuri","Divya",
  "Aarav","Vivaan","Reyansh","Vihaan","Arjun","Sai","Ishaan","Kabir","Atharv","Dhruv",
  "Rudra","Dev","Aryan","Ayaan","Shaurya","Laksh","Parth","Om","Kartik","Siddharth",
  "Aadhya","Anaya","Diya","Myra","Avni","Kiara","Navya","Siya","Pari","Anvika",
  "Aarohi","Prisha","Saanvi","Riddhi","Trisha","Tanvi","Mahi","Ira","Vanya","Meher",
  "Akash","Bhavesh","Chirag","Darshan","Eshan","Farhan","Girish","Hitesh","Jatin","Keshav",
  "Lalit","Mayank","Nakul","Pranav","Rohan","Samarth","Tejas","Utkarsh","Vaibhav","Zaid",
  "Alok","Bharat","Chetan","Devendra","Eklavya","Firoz","Govind","Hari","Inder","Jagdish",
  "Kamal","Madan","Nikhil","Ojas","Pratap","Qasim","Raman","Shankar","Tushar","Uday",
  "Veer","Wasim","Yatin","Zuber","Ansh","Bhanu","Chandan","Dheeraj","Ekta","Falak",
  "Garima","Heena","Isha","Jhanvi","Kashish","Lavanya","Mitali","Neetu","Oorja","Prachi", "Qirat","Ragini","Sonali","Tripti","Urvashi","Vaishnavi","Wamika","Yamini","Zara","Ayesha",
  "Bhawna","Charu","Damini","Esha","Falguni","Geeta","Himani","Indu","Juhi","Kanika",
  "Aman","Amar","Anand","Anup","Ashish","Balraj","Brijesh","Chaitanya","Daksh","Devesh",
  "Gagan","Gautam","Harish","Harman","Jai","Jaspreet","Karan","Kishan","Mohan","Narayan",
  "Naveed","Piyush","Raghav","Rajat","Ritesh","Sahil","Sharad","Shivam","Tanmay","Vivek",
  "Yuvraj","Abeer","Agastya","Anshul","Arnav","Bhavik","Chinmay","Divyansh","Hardik","Jivika",
  "Krish","Manan","Naman","Priyansh","Ritvik","Sarthak","Tanish","Vedant","Yashraj","Zayan",
  "Aakriti","Bhavya","Chhavi","Drishti","Eshani","Gauri","Harleen","Ishani","Janvi","Kritika",
  "Mahika","Navneet","Palak","Ritika","Samaira","Tanya","Vidhi","Yukti","Zoya","Aabha",
  "Bharti","Chandni","Deepika","Elina","Gunjan","Hema","Ishika","Jigyasa","Karuna","Lisha",
  "Mona","Namrata","Ojasvi","Pihu","Rupal","Shruti","Tanisha","Upasana","Vibha","Yashika",
  "Aftab","Bilal","Danish","Emran","Faizan","Hammad","Irfan","Junaid","Kasim","Nadeem",
  "Rizwan","Sajid","Tabrez","Uzair","Yusuf","Zubair","Aadil","Basit","Faraz","Hamza",
  "Imran","Javed","Noman","Rauf","Salman","Shakir","Tariq","Waseem","Yameen","Zeeshan",
  "Anmol","Bhuvan","Cyrus","Dharmesh","Eeshwar","Gokul","Harendra","Ilesh","Jitendra","Kuldeep",
  "Mahavir","Niraj","Pardeep","Ravindra","Suraj","Trilok","Vikrant","Yogendra","Zorawar","Abhay",
  "Baldev","Chiranjit","Dhananjay","Gurpreet","Hardeep","Jagmeet","Kulwinder","Manpreet","Navjot","Rajinder",
  "Sukhdeep","Tejinder","Amardeep","Bikram","Charanjeet","Daljeet","Gurvinder","Harvinder","Jaspal","Kulbir",
  "Maninder","Paramjit","Ranjodh","Satnam","Talwinder","Varinder","Yadwinder","Zoravar","Arshdeep","Bhupinder", "Aarush","Advait","Ahan","Akhil","Anirudh","Armaan","Ayush","Bhargav","Devansh","Eshwar",
  "Harshit","Ivaan","Jayesh","Kiaan","Lakshay","Moksh","Nivaan","Pranay","Rishabh","Samar",
  "Taksheel","Ujjwal","Ved","Yuvan","Aarika","Anvika","Bhavika","Charvi","Dhriti","Eva",
  "Grishma","Hridya","Inaaya","Jivika","Kashvi","Mahira","Nitya","Oviya","Pranavi","Risha",
  "Sharvani","Tvisha","Urvi","Vritika","Yamika","Zivah","Aakanksha","Bhavana","Chitra","Devika",
  "Ekisha","Fiza","Gitanjali","Hansika","Ishwarya","Jaya","Kalpana","Leena","Mrinal","Niharika",
  "Oshini","Prerna","Rachna","Sonal","Trupti","Uma","Varsha","Yogita","Zinal","Apeksha",
  "Bindiya","Chahat","Dolly","Ekta","Farida","Gargi","Hetal","Ipsita","Jasleen","Komalika",
  "Lavina","Muskaan","Nimisha","Parul","Roshni","Saloni","Tanushree","Urmila","Vandana","Yamini",
  "Zeenat","Akshay","Bharath","Chandan","Darpan","Eklaksh","Fanish","Girish","Himanshu","Ishan",
  "Jatin","Kartikeya","Lokendra","Madhav","Nakul","Prithvi","Rituraj","Shashank","Tapan","Utpal",
  "Vardhan","Yatin","Zuber","Anant","Bhavesh","Chetanya","Darshit","Eshan","Harshvardhan","Indrajeet",
  "Jagdip","Keshav","Lakhan","Mithun","Nilesh","Prafull","Raghunath","Shivendra","Tarakesh","Umesh",
  "Viren","Yashwant","Zahid","Abhinav","Brijesh","Chaitanya","Devraj","Gopal","Hariram","Jeevan", "Aariz","Aarnik","Aaryan","Abhijeet","Abhinay","Abir","Achintya","Adarsh","Adesh","Adil",
  "Adnan","Agnivesh","Ahan","Ajeet","Akhilesh","Altaf","Amardev","Amartya","Amish","Anay",
  "Angad","Aniket","Animesh","Anuj","Arham","Arjit","Arnav","Arpit","Arvind","Ashutosh",
  "Atharva","Avdhesh","Avinash","Ayan","Ayaz","Ayushman","Badal","Bhuvnesh","Chaitra","Chandanraj",
  "Chirantan","Dakshit","Darsh","Dayanand","Debashish","Deven","Dhairya","Dhanush","Dibyendu","Dikshit",
  "Dilip","Eeshan","Ekagra","Gajendra","Ganesh","Gauransh","Gokul","Govinda","Gulshan","Hardev",
  "Harjeet","Harshil","Hemraj","Hriday","Ilesh","Irfaan","Jagdamba","Jaskaran","Jatinraj","Jayant",
  "Jeevesh","Jignesh","Kabiraj","Kailash","Kanhaiya","Karanveer","Kartikay","Kaushal","Krunal","Kulraj",
  "Lavesh","Madhur","Mahipal","Manav","Manish","Mitesh","Mohanish","Mridul","Nakulraj","Namanraj",
  "Narendra","Nirbhay","Nitesh","Onkar","Pankil","Parikshit","Prabal","Pradyumn","Prateek","Pritesh",
  "Pulkit","Raghunandan","Rajat","Rajveer","Rakeshwar","Ranveer","Rishi","Riteshwar","Ronit","Rudransh",
  "Sachit","Samay","Sankalp","Sarvesh","Shailendra","Shivraj","Shlok","Shrey","Soham","Somesh",
  "Sparsh","Subham","Sudarshan","Sujal","Tanishq","Teerth","Udbhav","Utkarsh","Vaideh","Vedansh",
  "Vibhor","Vihan","Vijendra","Vinod","Viraj","Vishal","Yashdeep","Yug","Yuvansh","Zorain",
  "Aabida","Aahana","Aakansha","Aarini","Aashna","Abhilasha","Adhira","Akshita","Alisha","Amisha",
  "Anamika","Anisha","Anvita","Aradhya","Archana","Arohi","Avishi","Bhairavi","Bhavika","Bhoomi",
  "Charul","Daksha","Darshita","Deeksha","Devanshi","Dhwani","Dipali","Eesha","Eshita","Falisha",
  "Garvita","Gunika","Harini","Hridisha","Ishani","Jagruti","Janhita","Jivanta","Kairavi","Kalyani", "Kamya","Kanisha","Karishma","Kavya","Khushboo","Kripa","Lakshita","Lavisha","Madhavi","Mahima",
  "Manasvi","Mehak","Minal","Mishika","Mrunal","Naina","Nalini","Navika","Nehal","Niharika",
  "Nimrat","Nitya","Ojal","Oshini","Palvi","Paridhi","Parnika","Pavitra","Pihu","Pragati",
  "Prakriti","Pranita","Preksha","Priyal","Purvi","Rachita","Rajnandini","Raksha","Rashi","Ridhima",
  "Rimjhim","Ritika","Rupal","Saanika","Sadhana","Sakina","Samiksha","Sanjana","Sarika","Shagun",
  "Shalini","Sharvani","Shivangi","Shreya","Shrishti","Siya","Smriti","Snehal","Sonam","Soumya",
  "Spandana","Sugandha","Suhani","Surabhi","Tanirika","Tanushi","Tarini","Tejal","Triveni","Tulika",
  "Udita","Urmika","Vaani","Vaidehi","Vaishali","Vamika","Vanshika","Vedika","Vibha","Vidisha",
  "Vihana","Vrinda","Yashasvi","Yukti","Zaina","Zehra","Aditi","Anjali","Anusha","Apoorva",
  "Barkha","Bhavna","Chhaya","Damyanti","Deepa","Elakshi","Gauri","Harshita","Indrani","Juhi",
  "Kalpana","Lata","Mamta","Nandita","Pallak","Poonam","Renu","Sarita","Tanuja","Usha",
  "Varunika","Yamuna","Zoya","Abeer","Aakarsh","Aaryav","Abhigyan","Advik","Agam","Ainesh",
  "Akul","Amogh","Anvay","Arush","Aviraj","Bhavin","Chirayu","Devvrat","Divit","Ehit",
  "Garv","Harjas","Ivaan","Jivin","Kian","Lakshit","Manvik","Nivrit","Parv","Riaan",
  "Savit","Tavish","Uvansh","Vayun","Yuvan","Zavian","Aarna","Anvika","Charita","Drisha",
  "Ira","Kyra","Mahira","Navisha","Prisha","Rivya","Samaira","Tvesha","Vanya","Yuvika"
];
  const [search, setSearch]=useState("");
  const filteredstudents = students.filter(student=>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Student</h2>
      <input type="text"placeholder='Search Student' value={search} onChange={(e)=>setSearch(e.target.value)}/>

      <ul>
        {filteredstudents.map((student,index)=>(
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div><table>
//       <tr>
//         <td>id</td>
//         <td>name</td>
//         <td>desig</td>
//         <td>salery</td>
//       </tr>
//     </table>
//     <table>
//       <tr>
//         <td>229</td>
//         <td>Ankit</td>
//         <td>Sr. Engineer</td>
//         <td>1cr</td>
//       </tr>
//     </table><table>
//       <tr>
//         <td>253</td>
//         <td></td>
//         <td>Sr. Engineer</td>
//         <td>1cr</td>
//       </tr>
//     </table>
    
//     </div>
//   );
// }

// export default App;
// function App() {
//   const [className, setClassName] = useState("red");

//   return (
//     <div>
//       <button onClick={() => setClassName("green")}>
//         green
//       </button>

//       <button onClick={() => setClassName("red")}>
//         red
//       </button>

//       <h1 className={className}>
//         Ankit Saklani
//       </h1>
//     </div>
//   );
// // }
// function App() {
//   const [className, setClassName] = useState(false);

//   return (
//     <div>
//       <h1 className={className?'red':'green'}>Ankit</h1>
//       <button onClick={()=>setClassName(!className)}>Click to cahnge color</button>
//     </div>
//   );
// }
// function App() {
//   const [darkmode, setDarkMode] = useState(false);

//   return (
//     <div style={{backgroundColor:darkmode?"black":"white",
//       color: darkmode? "white":"black",
//       minHeight: "100vh",
//       padding:"20px"
//     }}>
// <h2>Theme Switcher</h2>
// <button onClick={()=>setDarkMode(!darkmode)}>
//   {darkmode?"Light Mode":"Dark Mode"}
// </button>
//     </div>
//   );
// }
// function App() {
//   const students = ["Rahul","Amit","Priya","Neha","MOhit"];

//   return (
//     <div>
//       <h2>Student List</h2>
//       <ul>
//         {students.map((student,index)=>(
//           <li key={index}>{student}</li>
//         ))}
//       </ul>
//     </div>
    
//   );
// }