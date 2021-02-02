import {useState} from 'react';
import './index.css'

const Team = () => {
    const [team2dList, set2dTeamList] = useState([...Array(29).keys()].map(res=>[]));
    const [teamList, setTeamList] = useState([]);

    const addTeamtoList = ({target}) => {
        var array_buffer = team2dList;
        var array_temp = [];
        for(var i = 0; i < target.value; i++){
            array_temp.push("Team"+target.className);  
        }
        array_buffer[target.className-1] = array_temp;
        set2dTeamList(array_buffer);
    }

    const raffle = () => {
        console.log(team2dList);
        console.log(team2dList.flat(1));
        var flatlist = team2dList.flat(1);
        setTeamList(flatlist);
    }

    const getTeam = () => {
        var logging = 0;
        setTimeout(()=>{
            var si = setInterval(()=>{
                logging += 1;
                console.log(logging+"------------------------calculating...------------------------")
            }, 50);
            setTimeout(()=>{
                console.log("-----------------------------almost done...-------------------------------")
            }, 4000);
            setTimeout(()=>{
                clearInterval(si);
                var team_1st = teamList[Math.floor(Math.random()*teamList.length)];
                console.log("1등 : "+ team_1st);
                console.log("...");
                var team_2nd = team_1st;
                var time_out_flag = 0;
                while(team_2nd === team_1st && time_out_flag <= 100){
                    console.log(".");
                    time_out_flag += 1;
                    team_2nd = teamList[Math.floor(Math.random()*teamList.length)];
                    if(team_2nd !== team_1st){
                        console.log("2등 : " + team_2nd);
                    }
                }
            }, 5000);
        }, 3000);
    }

    return (<div className="container">
            <div className="team-text">팀</div><div className="bingo-num-text">빙고 개수</div>
            {[...Array(29).keys()].map(res=><><div key={res+1+"team"}>Team{res+1}</div><input onChange={addTeamtoList} key={res+1+"input"} className={res+1} type="number"/></>)}
            <button onClick={raffle}>셋팅</button>
            <button onClick={getTeam}>추첨</button>
        </div>
    );
}

export default Team;
