import {useState} from 'react';
import './index.css';

const Team = () => {
    const [team2dList, set2dTeamList] = useState([...Array(29).keys()].map(res=>[]));
    const [teamList, setTeamList] = useState([]);
    const [selectNum, setSelectNum] = useState(0);

    const addTeamtoList = ({target}) => {
        var array_buffer = team2dList;
        var array_temp = [];
        for(var i = 0; i < target.value; i++){
            array_temp.push("Team"+target.className);  
        }
        array_buffer[target.className-1] = array_temp;
        set2dTeamList(array_buffer);
    }

    const setNum = ({target : {value}}) => {
        setSelectNum(value);
    }

    const raffle = () => {
        console.log(team2dList.filter(res=> res.length>0).length);
        console.log(team2dList.flat(1));
        var flatlist = team2dList.flat(1);
        setTeamList(flatlist);
    }

    const getTeam = () => {
        if(team2dList.filter(res=> res.length>0).length >= selectNum){
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
                var team_list_temp = teamList;
                    for(var i =  0; i < selectNum; i++){
                        var team_selected = team_list_temp[Math.floor(Math.random()*team_list_temp.length)];
                        team_list_temp = team_list_temp.filter(res=>
                        {      
                            return res !== team_selected;              
                        });
                        console.log(team_selected);
                        console.log(".");
                    }
                }, 5000);
            }, 3000);
        }
        else{
            alert("More selection than options!!");
        }
    }

    return (<div className="container">
            <div className="team-text">팀</div><div className="bingo-num-text">빙고 개수</div>
            {[...Array(29).keys()].map(res=><><div key={res+1+"team"}>Team{res+1}</div><input onChange={addTeamtoList} key={res+1+"input"} className={res+1} type="number"/></>)}
            <button onClick={raffle}>셋팅</button>
            <div>추첨 팀수</div><input type="number" onChange={setNum}/>
            <button onClick={getTeam}>추첨</button>
        </div>
    );
}

export default Team;
