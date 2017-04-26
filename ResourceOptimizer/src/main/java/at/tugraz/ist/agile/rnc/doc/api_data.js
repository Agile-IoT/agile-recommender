define({ "api": [
  {
    "type": "get",
    "url": "/getAppRecommendation",
    "title": "GetAppRecommendation",
    "name": "GetAppRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Apps.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfApps",
            "description": "<p>List of Recommended Apps</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfApps.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfApps.href",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ListOfApps.stars",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ListOfApps.downloads",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"appList\": [\n        {\n            \"title\": \"App\",\n            \"href\": \"hebele\",\n            \"stars\": 0,\n            \"downloads\": 0\n        },\n        {\n            \"title\": \"mgarciap/iot-sensor-simulator/\",\n            \"href\": \"https://hub.docker.com/r/mgarciap/iot-sensor-simulator/\",\n            \"stars\": 0,\n            \"downloads\": 0\n        },\n        {\n            \"title\": \"cuongdd1/sensor-remote-dashboard/\",\n            \"href\": \"https://hub.docker.com/r/cuongdd1/sensor-remote-dashboard/\",\n            \"stars\": 0,\n            \"downloads\": 0\n        },\n        {\n            \"title\": \"sensorlab6/videk/\",\n            \"href\": \"https://hub.docker.com/r/sensorlab6/videk/\",\n            \"stars\": 0,\n            \"downloads\": 0\n        },\n       {\n            \"title\": \"elliotsabitov/sensorsservernode/\",\n            \"href\": \"https://hub.docker.com/r/elliotsabitov/sensorsservernode/\",\n            \"stars\": 0,\n            \"downloads\": 0\n        },\n        {\n            \"title\": \"elliotsabitov/sensorsclientreact/\",\n            \"href\": \"https://hub.docker.com/r/elliotsabitov/sensorsclientreact/\",\n            \"stars\": 0,\n           \"downloads\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/getCloudRecommendation",
    "title": "GetCloudRecommendation",
    "name": "GetCloudRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Cloud Servers.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfClouds",
            "description": "<p>List of Recommended Clouds.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.link",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.accesstype",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.locations",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.middlewares",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.runtimes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.services",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.pricing",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"cloudList\": [\n        {\n            \"title\": \"Cloud\",\n            \"link\": \"hebele4\",\n            \"accesstype\": \"\",\n            \"locations\": \"\",\n            \"middlewares\": \"\",\n            \"frameworks\": \"\",\n            \"runtimes\": \"\",\n            \"services\": \"\",\n            \"pricing\": \"\"\n        },\n        {\n            \"title\": \"Heroku \",\n            \"link\": \"https://www.heroku.com/ \",\n            \"accesstype\": \"public , private \",\n            \"locations\": \"EU , NA \",\n            \"middlewares\": \"m \",\n            \"frameworks\": \"django , flask , grails , play , rails \",\n            \"runtimes\": \"clojue , go , groovyjava , node , php , python , ruby , scala \",\n            \"services\": \"postgresql , redis , TODO_ADD_MORE \",\n            \"pricing\": \"metered , monthly , free \"\n        },\n        {\n            \"title\": \"OpenShift Online \",\n            \"link\": \"https://www.openshift.com/features/index.html \",\n            \"accesstype\": \"public , private \",\n            \"locations\": \"EU , NA \",\n            \"middlewares\": \"jboss , tomcat , zend server \",\n            \"frameworks\": \"django , drupal , flask , rails , switchyard , vert.x \",\n            \"runtimes\": \"java , node , perl , php , python , ruby \",\n            \"services\": \"jenkins , mongodb , mysql , openshift metrics , postgresql \",\n            \"pricing\": \"monthly , fixed , annually , free , hybrid \"\n        },\n        {\n            \"title\": \"Bluemix \",\n            \"link\": \"https://console.ng.bluemix.net/ \",\n            \"accesstype\": \"public , private \",\n            \"locations\": \"EU , NA , OC \",\n            \"middlewares\": \"m \",\n            \"frameworks\": \"rails , sinatra \",\n            \"runtimes\": \"go , java , node , php , python , ruby \",\n            \"services\": \"advancedd mobile access ,  alchemyapi ,  api management ,  application security manager ,  appscan dynamis analyzer ,  appscan mobile analyzer ,  TODO_ADD_MORE \",\n           \"pricing\": \"metered , monthly \"\n        },\n        {\n            \"title\": \"Microsoft Azure \",\n            \"link\": \"https://azure.microsoft.com/tr-tr/ \",\n            \"accesstype\": \"public \",\n            \"locations\": \"AS , EU , NA , OC , SA \",\n            \"middlewares\": \"tomcat \",\n            \"frameworks\": \"cakephp , django \",\n            \"runtimes\": \"dotnet , java , node , php , python , ruby \",\n            \"services\": \"TODO_ADD_MORE \",\n            \"pricing\": \"metered , monthly \"\n        },\n        {\n            \"title\": \"Atos Cloud Foundry \",\n            \"link\": \"https://canopy-cloud.com/application-platforms/atos-cloud-foundry \",\n            \"accesstype\": \"public , private \",\n            \"locations\": \"AS , EU , NA , OC , SA \",\n            \"middlewares\": \"jboss , tomcat , tomee \",\n            \"frameworks\": \"django , grails , hhvm , play , rack , rails , sinatra , spring \",\n            \"runtimes\": \"clojure , dotnet , go , groovy , java , node , php , python , ruby , scala , swift \",\n            \"services\": \"neo4j , abacus , cassandra , couchdb , dingo-postgresql , elasticsearch , kafka , memcached , mongodb , mysql , postgresql , rabbitmq , redis , riakcs ,  TODO_ADD_MORE \",\n            \"pricing\": \"metered , monthly , fixed \"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/getDeviceRecommendation",
    "title": "GetDeviceRecommendation",
    "name": "GetDeviceRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Devices.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfDevices",
            "description": "<p>List of Recommended Devices.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfDevices.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfDevices.link",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"deviceList\": [\n        {\n            \"title\": \"Seeedstudio-Gas-Sensor-Socket\",\n            \"href\": \"https://www.amazon.com/Seeedstudio-Gas-Sensor-Socket/dp/B01C5RTCF4\"\n        },\n        {\n            \"title\": \"Seeedstudio-Grove-Gas-Sensor-MQ3\",\n            \"href\": \"https://www.amazon.com/Seeedstudio-Grove-Gas-Sensor-MQ3/dp/B01C5RNWW8\"\n        },\n        {\n            \"title\": \"Wavesahre-MQ-7-Semiconductor-Sensor-Gas\",\n            \"href\": \"https://www.amazon.com/Wavesahre-MQ-7-Semiconductor-Sensor-Gas/dp/B00NJNYWDG\"\n        },\n        {\n           \"title\": \"Wavesahre-MQ-2-Gas-Sensor-Detection\",\n            \"href\": \"https://www.amazon.com/Wavesahre-MQ-2-Gas-Sensor-Detection/dp/B00NJOIB50\"\n        },\n       {\n           \"title\": \"Waveshare-MQ-3-Gas-Sensor-Detection\",\n            \"href\": \"https://www.amazon.com/Waveshare-MQ-3-Gas-Sensor-Detection/dp/B00NL3KEYK\"\n        },\n        {\n            \"title\": \"MAUSAN-Temperature-Humidity-Sensor-Arduino\",\n            \"href\": \"https://www.amazon.com/MAUSAN-Temperature-Humidity-Sensor-Arduino/dp/B06XT4WWKW\"\n        },\n        {\n            \"title\": \"LM35-Temperature-Sensor-Component-pack\",\n            \"href\": \"https://www.amazon.com/LM35-Temperature-Sensor-Component-pack/dp/B01ISMVA1E\"\n        },\n        {\n            \"title\": \"WaveShare-Waveshare-DHT22-Temperature-Humidity-Sensor\",\n            \"href\": \"https://www.amazon.com/WaveShare-Waveshare-DHT22-Temperature-Humidity-Sensor/dp/B01C1CTW2G\"\n        },\n        {\n            \"title\": \"Venel-Has-Wavelength-760nm-1100nm-Light-Used-Fire-Fighting\",\n            \"href\": \"https://www.amazon.com/Venel-Has-Wavelength-760nm-1100nm-Light-Used-Fire-Fighting/dp/B01HI410AY\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/getWorkflowRecommendation",
    "title": "GetWorkflowRecommendation",
    "name": "GetWorkflowRecommendation",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Returns Recommended Workflows.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfWFs",
            "description": "<p>List of Recommended Workflows.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.datatag",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.dataowner",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.href",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"wfList\": [\n        {\n            \"type\": \"Workflow\",\n            \"datatag\": \"Workflow\",\n            \"dataowner\": \"Workflow\",\n            \"href\": \"wflink1\"\n        },\n        {\n            \"type\": \"Workflow\",\n            \"datatag\": \"Workflow\",\n            \"dataowner\": \"Workflow\",\n            \"href\": \"wflink2\"\n        },\n        {\n            \"type\": \"flow\",\n            \"datatag\": \"Hive,Thermostat,Hot-water,boost,british,gas\",\n            \"dataowner\": \"twonk\",\n            \"href\": \"/flow/62e04c333b192f6119d9d5b72f675d5f\"\n        },\n        {\n            \"type\": \"node\",\n            \"datatag\": \"node-red,sensor,temperature,DS18B20\",\n            \"dataowner\": \"Brendan Murray\",\n            \"href\": \"/node/node-red-contrib-ds18b20-sensor\"\n        },\n        {\n            \"type\": \"node\",\n            \"datatag\": \"node-red,sensor,temperature,DS18B20\",\n            \"dataowner\": \"Brendan Murray\",\n            \"href\": \"/node/node-red-ds18b20-sensor\"\n        },\n        {\n            \"type\": \"node\",\n            \"datatag\": \"node-red,netatmo,camera,tags,sensors,weather,iot,ibm\",\n            \"dataowner\": \"Guido Bellomo\",\n            \"href\": \"/node/node-red-contrib-netatmo-dashboard\"\n        },\n        {\n            \"type\": \"node\",\n            \"datatag\": \"node-red,netatmo,camera,tags,sensors,weather,iot,ibm\",\n            \"dataowner\": \"Sam Adams\",\n            \"href\": \"/node/node-red-contrib-netatmo\"\n        },\n        {\n            \"type\": \"flow\",\n            \"datatag\": \"arduino,johnny-five,monitoring,research,R&amp;D,data,logging,temperature,thermistor,sensor,johnny5\",\n            \"dataowner\": \"BradleyBock\",\n            \"href\": \"/flow/4bceef5251eaa1f17a8f1fbeb5b6c34d\"\n        },\n        {\n            \"type\": \"flow\",\n            \"datatag\": \"Plant ,Monitoring ,emoncms,Arduino ,Rasberry ,sensors ,sensor,humidity ,temperature,soil ,moisture,light,water ,Graphic\",\n            \"dataowner\": \"caasisaac\",\n            \"href\": \"/flow/25bbcb5246633806463d\"\n        },\n        {\n            \"type\": \"flow\",\n            \"datatag\": \"test,abb,temperature\",\n            \"dataowner\": \"pankeshlinux\",\n            \"href\": \"/flow/976d93d4a017c3f46b6bac7433b3c143\"\n        },\n        {\n            \"type\": \"flow\",\n            \"datatag\": \"modbus,serial,temperature,humidity\",\n            \"dataowner\": \"nygma2004\",\n            \"href\": \"/flow/670ba131f74bd127d884aab2a580bffb\"\n        },\n        {\n            \"type\": \"flow\",\n            \"datatag\": \"rmap,relay,temperature\",\n            \"dataowner\": \"pat1\",\n            \"href\": \"/flow/6f03c1f31b1b494a79bd36b30ca86278\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/updateRepositories",
    "title": "UpdateRepositories",
    "name": "UpdateRepositories",
    "version": "1.0.0",
    "group": "1_Recommender",
    "description": "<p>Updates the local repositories by getting new items from Amazon, Docker.hub and Node.Red websites.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "success",
            "description": "<p>is 0, error is -1</p>"
          }
        ]
      }
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "1_Recommender"
  },
  {
    "type": "get",
    "url": "/getResourceOptimization",
    "title": "GetResourceOptimization",
    "name": "GetResourceOptimization",
    "version": "1.0.0",
    "group": "2_Configurator",
    "description": "<p>Returns Resource Optimized Configuration.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "supportedDataEncodingProtocolsOfGateway",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "supportedConnectivityProtocolsOfGateway",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Performance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Reliability",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Cost",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "installedApps",
            "description": "<p>Optimized Configuration of installed Apps.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "installedApps.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "installedApps.url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "installedApps.inUse_DataEncodingProtocol",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "installedApps.inUse_ConnectivitiyProtocol",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errormessage",
            "description": ""
          }
        ]
      }
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "2_Configurator"
  },
  {
    "type": "get",
    "url": "/getServiceConfiguration",
    "title": "GetServiceConfiguration",
    "name": "GetServiceConfiguration",
    "version": "1.0.0",
    "group": "3_Settings",
    "description": "<p>Returns the settings of the service.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "staticServiceConfiguration",
            "description": "<p>Current settings of the service.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServiceForDevelopmentUIActive",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServiceForDeviceManagementUIActive",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServiceForAppManagementUIActive",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.allowRecommenderServerToUseGatewayProfile",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServerIP",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"recommenderServiceForDevelopmentUIActive\": false,\n\"recommenderServiceForDeviceManagementUIActive\": true,\n\"recommenderServiceForAppManagementUIActive\": true,\n\"allowRecommenderServerToUseGatewayProfile\": true,\n\"recommenderServerIP\": \"http://ec2-54-201-143-18.us-west-2.compute.amazonaws.com:8080/Recommender/\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "3_Settings"
  },
  {
    "type": "put",
    "url": "/setServiceConfiguration",
    "title": "SetServiceConfiguration",
    "name": "SetServiceConfiguration",
    "version": "1.0.0",
    "group": "3_Settings",
    "description": "<p>Updates the settings of the service.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "staticServiceConfiguration",
            "description": "<p>Settings of the service.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServiceForDevelopmentUIActive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServiceForDeviceManagementUIActive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServiceForAppManagementUIActive",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "staticServiceConfiguration.allowRecommenderServerToUseGatewayProfile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staticServiceConfiguration.recommenderServerIP",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "settings",
            "description": "<p>are updated successfully.</p>"
          }
        ]
      }
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "3_Settings"
  },
  {
    "type": "get",
    "url": "/getGatewayProfileForConfigurator",
    "title": "GetGatewayProfileForConfigurator",
    "name": "GetGatewayProfileForConfigurator",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Returns the gateway profile used by Configurator.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "supportedDataEncodingProtocolsOfGateway",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "supportedConnectivityProtocolsOfGateway",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Performance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Reliability",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Cost",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "installedApps",
            "description": "<p>Optimized Configuration of installed Apps.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "installedApps.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "installedApps.url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "installedApps.inUse_DataEncodingProtocol",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "installedApps.inUse_ConnectivitiyProtocol",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errormessage",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"supportedDataEncodingProtocolsOfGateway\": [\n        0,\n        1,\n        2\n    ],\n    \"supportedConnectivityProtocolsOfGateway\": [\n        0,\n        3,\n        4\n    ],\n    \"userRequirementWeight_Performance\": 1,\n    \"userRequirementWeight_Reliability\": 1,\n    \"userRequirementWeight_Cost\": -1,\n    \"installedApps\": [\n        {\n            \"name\": \"fire alarm\",\n            \"url\": \"link1\",\n            \"inUse_DataEncodingProtocol\": 0,\n           \"inUse_ConnectivitiyProtocol\": 0,\n            \"supportedDataEncodingProtocolsOfApp\": [\n                0,\n               1\n           ],\n            \"supportedConnectivitiyProtocolsOfApp\": [\n                0,\n                2\n            ]\n        },\n        {\n            \"name\": \"temperature alarm\",\n            \"url\": \" link2\",\n            \"inUse_DataEncodingProtocol\": 0,\n            \"inUse_ConnectivitiyProtocol\": 1,\n            \"supportedDataEncodingProtocolsOfApp\": [\n               0\n            ],\n            \"supportedConnectivitiyProtocolsOfApp\": [\n                1\n            ]\n        },\n        {\n            \"name\": \"gas alarm\",\n            \"url\": \"link3\",\n            \"inUse_DataEncodingProtocol\": 0,\n            \"inUse_ConnectivitiyProtocol\": 0,\n            \"supportedDataEncodingProtocolsOfApp\": [\n                0,\n                2\n            ],\n            \"supportedConnectivitiyProtocolsOfApp\": [\n                0\n            ]\n        }\n    ],\n    \"errorMessage\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "type": "get",
    "url": "/getGatewayProfileForRecommender",
    "title": "GetGatewayProfileForRecommender",
    "name": "GetGatewayProfileForRecommender",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Returns the gateway profile used by Recommender.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfDevices",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfDevices.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfDevices.link",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfApps",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfApps.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfApps.href",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ListOfApps.stars",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ListOfApps.downloads",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfWFs",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.datatag",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.dataowner",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.href",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfClouds",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.link",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.accesstype",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.locations",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.middlewares",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.runtimes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.services",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.pricing",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pricingPreferences",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"devices\": {\n       \"deviceList\": [\n            {\n                \"title\": \"camera\",\n                \"href\": \"link4\"\n            },\n            {\n                \"title\": \"gas sensor\",\n                \"href\": \"link5\"\n            },\n            {\n                \"title\": \"lcd\",\n                \"href\": \"link6\"\n            }\n        ]\n    },\n    \"apps\": {\n        \"appList\": [\n            {\n                \"title\": \"fire alarm\",\n                \"href\": \"link1\",\n                \"stars\": 0,\n                \"downloads\": 0\n            },\n            {\n                \"title\": \"temperature alarm\",\n                \"href\": \"link2\",\n                \"stars\": 0,\n                \"downloads\": 0\n            },\n            {\n                \"title\": \"gas alarm\",\n                \"href\": \"link3\",\n                \"stars\": 0,\n                \"downloads\": 0\n            }\n        ]\n    },\n    \"wfs\": {\n        \"wfList\": [\n            {\n                \"type\": \"node\",\n               \"datatag\": \"datatag1\",\n                \"dataowner\": \"datawner1\",\n                \"href\": \"link7\"\n            },\n            {\n                \"type\": \"workflow\",\n                \"datatag\": \"datatag2\",\n                \"dataowner\": \"datawner2\",\n                \"href\": \"link8\"\n            },\n            {\n                \"type\": \"workflow\",\n                \"datatag\": \"datatag3\",\n                \"dataowner\": \"datawner3\",\n                \"href\": \"link9\"\n            }\n        ]\n    },\n    \"clouds\": {\n        \"cloudList\": [\n           {\n                \"title\": \"cloud1\",\n                \"link\": \"link10\",\n                \"accesstype\": null,\n                \"locations\": null,\n                \"middlewares\": null,\n                \"frameworks\": null,\n                \"runtimes\": null,\n                \"services\": null,\n                \"pricing\": null\n            },\n            {\n                \"title\": \"cloud2\",\n                \"link\": \"link11\",\n                \"accesstype\": null,\n                \"locations\": null,\n                \"middlewares\": null,\n                \"frameworks\": null,\n                \"runtimes\": null,\n                \"services\": null,\n                \"pricing\": null\n            }\n        ]\n   },\n    \"location\": \"EU\",\n    \"pricingPreferences\": \"free , metered\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "type": "put",
    "url": "/setGatewayProfileForRecommender",
    "title": "SetGatewayProfileForRecommender",
    "name": "SetGatewayProfileForRecommender",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Sets the gateway profile used by Recommender.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfDevices",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfDevices.title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfDevices.link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfApps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfApps.title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfApps.href",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ListOfApps.stars",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ListOfApps.downloads",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfWFs",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.datatag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.dataowner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfWFs.href",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "ListOfClouds",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.link",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.accesstype",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.locations",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.middlewares",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.runtimes",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.services",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListOfClouds.pricing",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pricingPreferences",
            "description": ""
          }
        ]
      }
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "type": "put",
    "url": "/setGatewayProfileForConfigurator",
    "title": "SetGatewayProfileForConfigurator",
    "name": "setGatewayProfileForConfigurator",
    "version": "1.0.0",
    "group": "4_For_Testing_Purposes",
    "description": "<p>Sets the gateway profile used by Configurator.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "supportedDataEncodingProtocolsOfGateway",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "supportedConnectivityProtocolsOfGateway",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Performance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Reliability",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userRequirementWeight_Cost",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "installedApps",
            "description": "<p>Optimized Configuration of installed Apps.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installedApps.name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "installedApps.url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "installedApps.inUse_DataEncodingProtocol",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "installedApps.inUse_ConnectivitiyProtocol",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "errormessage",
            "description": ""
          }
        ]
      }
    },
    "filename": "./RnCAPI.java",
    "groupTitle": "4_For_Testing_Purposes"
  },
  {
    "description": "<p>AGILE Recommender and Configurator Docker Service</p>",
    "version": "1.0.0",
    "type": "",
    "url": "",
    "filename": "./RnCAPI.java",
    "group": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_RnCAPI_java",
    "groupTitle": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_RnCAPI_java",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_doc_main_js",
    "groupTitle": "C__Users_spolater_Desktop_AGILE_AGILE_GITHUB_Configurator_Configurator_ResourceOptimizer_src_main_java_at_tugraz_ist_agile_rnc_doc_main_js",
    "name": ""
  }
] });
