/*
 * Grava Nota por Teste API
 * 
 * Allows the record of students answers for each question
 */

/////////////////
// Question Types
/////////////////

/**
 * @enum {String}
 */
QuestionTypes = {
  QUIZ: '1',
  FILL: '2'
};

///////////////////
// Question Classes
///////////////////

/*
 * Quiz
 * 
 * References to "Teste Vestibular"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Quiz}
 */
function Quiz(description, answer, page) {
  this.questiontype = QuestionTypes.QUIZ;
  this.description = String(description);
  this.answer = String(answer);
  this.page = String(page);
  this.studentanswer = null;
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Quiz.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Fill
 * 
 * References to "Preenchimento de Lacunas"
 */

/**
 * @constructor
 * @param {String} description
 * @param {Array} answer
 * @param {String} page
 * @returns {Quiz}
 */
function Fill(description, answer, page) {
  this.questiontype = QuestionTypes.FILL;
  this.description = String(description);
  this.answer = answer;
  this.page = String(page);
  this.studentanswer = null;
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Fill.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  
  if (! this.answer instanceof Array) {
    throw "Not Array";
  }
  
  var l = this.answer.length;
  for (var i = 0; i < l; i++) {
    if (this.answer[i] === studentanswer) {
      return true;
    }
  }
  return false;
};

/**
 * Account the amount of char in a string
 * @param {String} str
 * @param {char} charCmp
 * @returns {Array()}
 */
function strCount(str, charCmp) {
	var cont = 0;
	var vet = new Array();
	for (i = 0; i < str.length; i++) {
		if (str.charAt(i) == charCmp) {
			vet[cont] = i;
			cont++;
		}
	}
	return vet;
}

/**
 * Returns a parameter of a string
 * @param {String} str
 * @param {int} num
 * @param {int} tipo
 * @returns {Undetermined}
 */
function getParam(str, num, tipo) {
	var sub = "";
	var ini = 0;
	if (num == 1) {
		sub = str.substring((ini+1), str.indexOf(','));
	} else {
		var n = num;
		var dec = true;
		while (n > 1) {
			if (str.charAt(ini) == '[')
				dec = false;
			else {
				if (str.charAt(ini) == ']')
					dec = true;
					if (str.charAt(ini) == ',' && dec)
						n--;
			}
			ini++;
		}
		ini--;
		if (num == 4) {
			sub = str.substring((ini+1), str.indexOf('}'));
		} else {
			if (tipo == 1 || num ==3) {
				str = str.substring((ini+1));
				n = 0;
				while (n < str.length && str.charAt(n) != ',') {
					sub += str.charAt(n);
					n++;
				}
			} else {
				ini += 2;
				var str2 = str.substring(ini);
				str2 = str2.substring(0, str2.indexOf("]") + 1);
				var indResp = strCount(str2, ",");
				sub = new Array();
				if (indResp.length == 0)
					sub[0] = str2.substring(0, str2.indexOf("]"));
				else {
					sub[0] = str2.substring(0, str2.indexOf(","));
					for (i = 0; i < indResp.length; i++) {
						if ((i + 1) == indResp.length)
							sub[i + 1] = str2.substring(indResp[i]+2, str2.substring((indResp[i]+1)).indexOf("]")+1);
						else
							sub[i + 1] = str2.substring(indResp[i]+2, str2.substring((indResp[i]+1)).indexOf(",")+1);
					}
				}
				return sub;
			}
		}
	}
	if (sub == '')
		sub = '\'\'';
	return sub;
}
 /**
  * Convert a String to the object Quiz
  * @param {String} vtv
  * @returns {Array()} Array from Quiz object
  */
function parseQuiz(vtv) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetQuiz = new Array();
	if (vtv != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vtv.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetQuiz[j] = new Quiz('','','');
			vetQuiz[j].description = getParam(vtv.substring(tam[j]), 1, 1);
			vetQuiz[j].answer = getParam(vtv.substring(tam[j]), 2, 1);
			vetQuiz[j].page = getParam(vtv.substring(tam[j]), 3, 1);
			vetQuiz[j].studentanswer = getParam(vtv.substring(tam[j]), 4, 1);
		}
	}
	return vetQuiz;
}
/**
  * Convert a String to the object Fill
  * @param {String} vpl
  * @returns {Array()} Array from Fill object
  */
function parseFill(vpl) {//following this pattern: {'description',['answer1','answer2',...],'page','studentanswer'},{...}
	var vetFill = new Array();
	if (vpl != '{\'\',[\'\'],\'\',\'\'}') {//is not empty
		var tam = strCount(vpl.toString(), '{');
		var resp;
		var j;
		for (j = 0; j < tam.length; j++) {
			resp = getParam(vpl.substring(tam[j]), 2, 2);
			vetFill[j] = new Fill('',resp,'');
			vetFill[j].description = getParam(vpl.substring(tam[j]), 1, 2);
			vetFill[j].page = getParam(vpl.substring(tam[j]), 3, 2);
			vetFill[j].studentanswer = getParam(vpl.substring(tam[j]), 4, 2);
		}
	}
	return vetFill;
}
/**
 * Convert the object Quiz to String
 * @param {Array()} vettestevestibular
 * @returns {String}
 */
 function toStringQuiz(vettestevestibular) {
	if (vettestevestibular != null && vettestevestibular.length > 0) {
		var str = '';
		for (i = 0; i < vettestevestibular.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vettestevestibular[i].description == '')
				str += '\'\'';
			else
				str += vettestevestibular[i].description;
			str += ','+ vettestevestibular[i].answer;
			str += ','+ vettestevestibular[i].page;
			if (vettestevestibular[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vettestevestibular[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Fill to String
 * @param {Array()} vetpreenchimento
 * @returns {String}
 */
 function toStringFill(vetpreenchimento) {
	if (vetpreenchimento != null && vetpreenchimento.length > 0) {
		var str = '';
		for (i = 0; i < vetpreenchimento.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetpreenchimento[i].description == '')
				str += '\'\'';
			else
				str += vetpreenchimento[i].description;
			str += ',[';
			for (j = 0; j < vetpreenchimento[i].answer.length; j++) {
				if (j > 0)
					str += ',';
				str += vetpreenchimento[i].answer[j];
			}
			str += '],'+ vetpreenchimento[i].page;
			if (vetpreenchimento[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetpreenchimento[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',[\'\'],\'\',\'\'}';
	}
 }