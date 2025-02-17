define({ 

 recolheMenu: function(eventobject){
    var self = this;
    self.view.btnrecolhe.isVisible = false;
    self.view.btnExpandir.isVisible = true;
    //  
    self.view.FlexScrollContainerPainelDir.animate(
      voltmx.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": voltmx.anim.EASE
          },
          "minWidth": "930dp",
          "maxWidth": "1826dp"
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      });

    self.view.FlexScrollContainerPainelEsq.animate(
      voltmx.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": voltmx.anim.EASE
          },
          "width": "64dp"
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      });


    //
    
  },


  expandirMenu: function(eventobject){
    var self = this;
    self.view.btnrecolhe.isVisible = true;
    self.view.btnExpandir.isVisible = false;
    //  
    self.view.FlexScrollContainerPainelDir.animate(
      voltmx.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": voltmx.anim.EASE
          },
          "minWidth": "738dp",
          "maxWidth": "1634dp"
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      });

    self.view.FlexScrollContainerPainelEsq.animate(
      voltmx.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": voltmx.anim.EASE
          },
          "width": "256dp"
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      });

    
  },

  getTodosAbrigados: function(self){
    function INVOKE_SERVICE_GetAll_Callback(status, GetAll) {
      var tempCollection5116 = [];
      var tempData5454 = GetAll.clientes;
      for (var each8216 in tempData5454) {
        tempCollection5116.push({
          "lblIdade1": {
            "text": tempData5454[each8216]["Idade"]
          },
          "lblControle1": {
            "text": tempData5454[each8216]["Controle"]
          },
          "lblDtNascto1": {
            "text": tempData5454[each8216]["DtNascto"]
          },
          "lblInternacao1": {
            "text": tempData5454[each8216]["Internacao"]
          },
          "lblColunaD1": {
            "text": tempData5454[each8216]["ColunaD"]
          },
          "lblTempoAbrigado1": {
            "text": tempData5454[each8216]["TempoAbrigado"]
          },
          "lblColunaE1": {
            "text": tempData5454[each8216]["ColunaE"]
          },
          "lblNome1": {
            "text": tempData5454[each8216]["Nome"]
          },
          "lblResponsaveis1": {
            "text": tempData5454[each8216]["Responsaveis"]
          },
          "lblColunaA1": {
            "text": tempData5454[each8216]["ColunaA"]
          },
          "lblColunaB1": {
            "text": tempData5454[each8216]["ColunaB"]
          },
          "lblColunaC1": {
            "text": tempData5454[each8216]["ColunaC"]
          },
        });
      }
      self.view.segTodosClientes.setData(tempCollection5116);
    }
    if (GetAll_inputparam == undefined) {
      var GetAll_inputparam = {};
    }
    GetAll_inputparam["serviceID"] = "app_asilar_api$GetAll";
    var GetAll_httpheaders = {};
    GetAll_inputparam["httpheaders"] = GetAll_httpheaders;
    var GetAll_httpconfigs = {};
    GetAll_inputparam["httpconfig"] = GetAll_httpconfigs;
    app_asilar_api$GetAll = mfintegrationsecureinvokerasync(GetAll_inputparam, "app_asilar_api", "GetAll", INVOKE_SERVICE_GetAll_Callback);
  }

 });