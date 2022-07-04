 // sudo systemctl status nginx
 // sudo systemctl stop nginx
 // sudo systemctl start nginx
 // sudo systemctl reload nginx
 //sudo systemctl restart nginx

 // Failed to add a watch for /run/systemd/ask-password: inotify watch limit reached
        //  sudo -i
        //  echo 1048576 > /proc/sys/fs/inotify/max_user_watches
        //  exit

  // enable mngo db on startup
       //sudo systemctl enable mongod
  //mongodb commants
       //   sudo systemctl status mongod
       //   sudo systemctl stop mongod
       //   sudo systemctl start mongod
       //   sudo systemctl restart mongod
       //   sudo systemctl disable mongod
       //   sudo systemctl enable mongod




 //to enter mango db       
    // mongo -u naseef--p --authenticationDatabase admin

 // to remove mngodb compleatly
       //sudo apt purge mongodb-*
       //dpkg -l | grep mongo
       //sudo apt purge mongo-tools
       
       

    /* 

    remove files
      rm filename
      rm filename1 filename2 filename3

    remove folder
      for empty folder
      rmdir dirname

      for non empty folder
      rm -rf dirname


    */


      // {
      //   fdOrder: [
      //     { fdId: 118, name: 'chemmin curr', qnt: 1, price: 500, ktNote: '' },
      //     { fdId: 120, name: 'chikken chukka', qnt: 1, price: 9, ktNote: '' },
      //     { fdId: 123, name: 'pastha', qnt: 1, price: 200, ktNote: '' },
      //     { fdId: 125, name: 'naseef', qnt: 1, price: 300, ktNote: '' }
      //   ],
      //   fdOrderStatus: 'pending',
      //   fdOrderType: 'takeaway',
      //   _id: new ObjectId("62b9f53ecc99e36b6a70e4a4"),
      //   __v: 0
      // }