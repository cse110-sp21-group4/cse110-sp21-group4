const TEST_USER = 'test@ucsd.edu'
const TEST_PASSWORD = '12345678'

const testPageData = {
  timestamp: 22389128371,
  startDate: '06032011',
  texts: [
    {
      text: 'test in you ass hole',
      size: { width: 100, height: 100 },
      position: { left: '100px', top: '50px' },
      fontsize: 100,
      color: '#ff00ff',
      underline: true,
      bold: true,
      italic: true,
      bullet: 'dot'
    }
  ],

  images: [
    {
      ref: 'test/test.jpg',
      size: { width: 100, height: 100 },
      position: { left: '100px', top: '50px' }
    }
  ]
}

export class MainPageModel {
  constructor() {
    this._entry = {}
    this.user = {}
    this.initFirebase()

    // this.signIn(TEST_USER, TEST_PASSWORD, () => {
    // this.savePageData(testPageData)
    // this.loadData(testPageData.startDate, testPageData.timestamp, (data) => {
    //   console.log(data)
    // })
    //   this.updatedata(
    //     testpagedata,
    //     () => {
    //       console.log('updated')
    //     },
    //     (e) => {
    //       console.log(e)
    //     }
    //   )
    // this.removeData(
    // testPageData.startDate,
    // testPageData.timestamp,
    // () => {
    // console.log('removed..')
    // },
    // (e) => {
    // console.log(e)
    // }
    // )
    // })
  }

  isSignedIn() {
    return firebase.auth().currentUser != null
  }

  initFirebase() {
    firebase.initializeApp(this.firebaseConfig)
    this.storage = firebase.storage()
    // firebase.auth().onAuthStateChanged((firebaseUser) => {
    //   if (firebaseUser) {
    //     //console.log('user signed in:' + firebaseUser)
    //   } else {
    //     //console.log('log out')
    //   }
    // })
  }

  getUrl(refStr, callback, errorCallback) {
    this.storage
      .ref()
      .child(refStr)
      .getDownloadURL()
      .then((url) => {
        callback(url)
      })
      .catch((e) => {
        errorCallback(e)
      })
  }

  /**
   * save image to firebase storage
   * @param {file} imageFile a file get from file input
   * @param {function} progress_fn progress callback, parameter: percentage
   * @param {function} error_fn error callback, parameter: error message
   * @param {function} complete_fn complete callback, parameter: reference string
   */
  saveImage(imageFile, progress_fn, error_fn, complete_fn) {
    const timestamp = Date.now()
    const uid = firebase.auth().currentUser.uid
    const refStr = uid + '/' + timestamp
    let storageRef = this.storage.ref(refStr)
    let task = storageRef.put(imageFile)
    task.on(
      'state_changed',
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        progress_fn(percentage)
      },
      (err) => {
        error_fn(err.message)
      },
      () => {
        this.getUrl(
          refStr,
          (url) => {
            complete_fn(url, refStr)
          },
          (e) => {
            error_fn(e.message)
          }
        )
      }
    )
  }

  /**
   * @param {object} pageData a data that recorded all the information in the main page
   * {
   *    timestamp: 12389128371,
   *    startDate: '06032011',
   *    texts: [
   *      {
   *        text: 'test in you ass hole',
   *        size: {width: 100, height: 100},
   *        position: {left: '100px', top: '50px'},
   *        fontsize: 15,
   *        color: '#ff00ff',
   *        underline: true,
   *        bold: true,
   *        italic: true,
   *        bullet: 'dot'
   *      },
   *      ...
   *    ],
   *    images: [
   *      {
   *        ref: 'test/test.jpg',
   *        size: {width: 100, height: 100},
   *        position: {left: '100px', top: '50px'},
   *       }
   *    ]
   * }
   */
  savePageData(pageData) {
    //console.log(this.getDataRef(pageData.startTime))
    firebase
      .database()
      .ref(this.getDataRef(pageData.startDate, pageData.timestamp))
      .set(pageData)
  }

  loadPageData(startDate, startTime) {
    firebase.database()
  }

  getDataRef(startDate, timestamp) {
    return this.getRefPrefix(startDate) + '/' + timestamp
  }

  getRefPrefix(startDate) {
    const uid = firebase.auth().currentUser.uid
    return uid + '/' + startDate
  }

  loadDataArrayByDate(startDate, callback, errorCallback) {
    this.loadData(startDate, callback, errorCallback)
  }

  loadData(startDate, timestamp, callback, errorCallback) {
    const uid = firebase.auth().currentUser.uid
    let dbObj = firebase.database().ref().child(uid).child(startDate)

    if (timestamp) {
      dbObj = dbObj.child(timestamp)
    }

    dbObj
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          callback(snapshot.val())
        } else {
          if (errorCallback) errorCallback('No data available')
        }
      })
      .catch((error) => {
        if (errorCallback) errorCallback(error.message)
      })
  }

  updateData(pageData, callback, errorCallback) {
    const uid = firebase.auth().currentUser.uid
    const updates = {}
    updates[pageData.timestamp + ''] = pageData
    firebase
      .database()
      .ref()
      .child(uid)
      .child(pageData.startDate)
      .update(updates)
      .then(() => {
        callback()
      })
      .catch((e) => {
        if (errorCallback) errorCallback(e)
      })
  }

  removeData(startDate, timestamp, callback, errorCallback) {
    const uid = firebase.auth().currentUser.uid
    firebase
      .database()
      .ref()
      .child(uid)
      .child(startDate)
      .child(timestamp)
      .remove()
      .then(() => {
        callback()
      })
      .catch((e) => {
        if (errorCallback) errorCallback(e)
      })
  }

  signOut(callback) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        callback()
      })
  }

  signUp(email, password, callback) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        callback(userCredential)
      })
      .catch((error) => {
        console.log('Create user failed:' + error.message)
      })
  }

  signIn(email, password, callback) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        callback(userCredential)
      })
      .catch((e) => {
        console.log('failed to login:' + e.message)
      })
  }

  get currentEntry() {
    return this._entry
  }

  set currentEntry(entry) {
    this._entry = entry
  }

  get firebaseConfig() {
    return {
      apiKey: 'AIzaSyC5GNoKloWkvhux25LTkvAG5SgNCAa66F0',
      authDomain: 'bulletjounal-1b118.firebaseapp.com',
      projectId: 'bulletjounal-1b118',
      storageBucket: 'bulletjounal-1b118.appspot.com',
      messagingSenderId: '166595497341',
      appId: '1:166595497341:web:37b1aed018affecfb9d014'
    }
  }
}
