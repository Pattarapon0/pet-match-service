import fetch from 'node-fetch';


const pet1  = {
    petId: "1",
    userId: "11",
    petName: "pet1"
  }

const pet2  = {   
    petId: "2",
    userId: "12",
    petName: "pet2"
  }
const pet3  = {
    petId: "3",
    userId: "13",
    petName: "pet3"
  }
const pet4  = {
    petId: "4",
    userId: "14",
    petName: "pet4"
}  

const pet5  = {
    petId: "5",
    userId: "15",
    petName: "pet5"
}

const sendMatch= async (pet1,pet2) => {
    await fetch(`http://localhost:5548/api/v1/sendMatchRequest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            senderUserId:pet1.userId,
            senderPetId:pet1.petId,
            senderPetName:pet1.petName,
            receiverUserId:pet2.userId,
            receiverPetId:pet2.petId,
            receiverPetName:pet2.petName
        })
    }).then(async (response) => { console.log(await response.json())}    
    ).catch((error) => {
        console.log(error);
    });
}
const getMatchDetail=async (pet1)=>{
    await fetch(`http://localhost:5548/api/v1/getMatchRequestDetail/${pet1.petId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {console.log(await response.json())}    
    ).catch((error) => {
        console.log(error);
    });
}


/*Promise.all([sendMatch(pet1,pet2),
sendMatch(pet2,pet1),
sendMatch(pet1,pet4),
sendMatch(pet5,pet1),
sendMatch(pet1,pet3),])*/


Promise.all([
    getMatchDetail(pet1),
    getMatchDetail(pet3),
    getMatchDetail(pet4)
])
