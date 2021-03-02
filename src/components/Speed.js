import React, { Component } from 'react';
class Speed extends Component {
    state = { 
        lastEntry:0,
        lattitude:0,
        longtitude:0,
        feeds: []
      }
     
   async componentDidMount(){
        const url = "https://api.thingspeak.com/channels/1313349/feeds.json?results=2";
        const response = await fetch(url);
        var latti = [];
        const data = await response.json();
        console.log(data);

        
        this.setState(
            {
                lastEntry: data.channel.last_entry_id,
                lattitude: data.feeds[data.feeds.length-1].field1,
                longtitude: data.feeds[data.feeds.length-1].field2,
                feeds: data.feeds

            }
        );
    
    }
    
    
    render() { 
        console.log(this.state.feeds);
        return ( 
            <div>
                <div style={{fontWeight:'bold'}}> Time <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Location Link</div>
                {this.state.feeds.map((location, index) => (
                    <div>
                        <div> {location.created_at.substring(11,19)} <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> <a href={'https://www.google.com/maps/?q=' + location.field1 +',' + location.field2+''}> {location.field1}, {location.field2} </a></div>
    
                    </div>
                    
                ))}
            </div>
         );
    }
}
 
export default Speed;