var clickList = new Array();
var numOfClicks = 0;
var cliekdType = '';
var word = '';

chrome.storage.local.get('num', function(result){
	if(result.num != null) {
	    numOfClicks += result.num;
	}
});
chrome.storage.local.get('loc', function(result){
	if(result.loc != null) {
    	clickList = result.loc;
	}
});

function clickOrigin(e){
    var target = e.target;
    var tag = [];
    tag.tagType = target.tagName.toLowerCase();
    return tag;
}

document.onclick = clickListener;
document.onkeypress = keyListener;

function keyListener(e) {
	var charType = e.key;
	if(clickList[clickList.length-1] == (' name') || clickList[clickList.length-1] == (' description') || clickList[clickList.length-1] == (' profile-query')) {
		word += String(e.key);
	}
}

function clickListener(e) {
    var clickedElement;
    clickedType = clickOrigin(e).tagType;
    numOfClicks++;
    if(clickList.length > 0) {
    	if(clickList[clickList.length-1] == (' name') || clickList[clickList.length-1] == (' description') || clickList[clickList.length-1] == (' profile-query') && word != '') {
    		clickList.push('Typed: ' + word);
    		word = '';
    	}
	}
    if(clickedType != 'a' && clickedType != 'input' && clickedType != 'b' && clickedType != 'option' && clickedType != 'textarea' && clickedType != 'label' && clickedType != 'button') {
    	clickedElement = 'misclick';
    	if(String(window.location.pathname).includes('/about/resources.html') && clickedType == 'span') {
    		typeOfElement(e.target.parentNode);
    	}
    }
    else {
    	clickedElement = typeOfElement(e);
	}
	clickList.push(' ' + clickedElement);
	//comment out next line for stopping the annoying alerts
	alert(clickList);
	chrome.storage.local.set({ 'num': numOfClicks }, function(){
	});
	chrome.storage.local.set({ 'loc': clickList }, function(){
	});
}

function typeOfElement(e) {

   	if(clickedType == 'b') {
   		clickedElement = 'Log Out';
   	}

   	else if(e.target == 'https://cyverse-dnasubway-guide.readthedocs-hosted.com/en/latest/step7.html') {
   		clickedElement = 'Green Line Tutorial';
   	}

   	else if(e.target == 'https://pachterlab.github.io/kallisto/') {
   		clickedElement = 'kallisto';
   	}

   	else if(e.target == 'https://pachterlab.github.io/sleuth/') {
   		clickedElement = 'sleuth';
   	}

   	else if(e.target == 'mailto:DNALCAdmin@cshl.edu') {
   		clickedElement = 'Mail DNALC';
   	}

   	else if(e.target == 'http://www.tacc.utexas.edu/') {
   		clickedElement = 'Texas Advanced Computing Center';
   	}

   	else if(e.target == 'http://www.tacc.utexas.edu/resources/hpc') {
   		clickedElement = 'Stampede SuperComp';
   	}

   	else if(e.target == 'http://www.nature.com/nprot/journal/v7/n3/fig_tab/nprot.2012.016_F2.html') {
   		clickedElement = 'Tuxedo Protocol';
   	}

   	else if(e.target == 'http://dnasubway.iplantcollaborative.org/files/pdf/DNA_Subway_Guide.pdf') {
   		clickedElement = 'Green Line Guide';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/ngs/create') {
   		clickedElement = 'Green Line';
   	}

   	else if(e == 'http://www.ensemblgenomes.org/') {
   		clickedElement = 'Ensemblgenoes';
   	}

   	else if(e == 'http://www.gramene.org/') {
   		clickedElement = 'Gramene Genomes';
   	}

   	else if(e == 'http://www.ncbi.nlm.nih.gov/mapview/') {
   		clickedElement = 'NCBI Genomes';
   	}

   	else if(e == 'http://www.phytozome.net/') {
   		clickedElement = 'Phytozome Genomes';
   	}

   	else if(e == 'http://genome.ucsc.edu/cgi-bin/hgGateway') {
   		clickedElement = 'UCSC Genomes';
   	}

   	else if(e == 'http://augustus.gobics.de/') {
   		clickedElement = 'Augustus';
   	}

   	else if(e == 'http://linux1.softberry.com/berry.phtml?topic=fgenesh&group=programs&subgroup=gfind') {
   		clickedElement = 'FGenesH';
   	}

   	else if(e == 'http://genes.mit.edu/genomescan.html') {
   		clickedElement = 'GenomeScan';
   	}

   	else if(e == 'http://homepage.mac.com/iankorf/') {
   		clickedElement = 'SNAP';
   	}

   	else if(e == 'http://blast.ncbi.nlm.nih.gov/Blast.cgi') {
   		clickElement = 'BLAST';
   	}

   	else if(e == 'http://www.iplantcollaborative.org/') {
   		clickedElement = 'BLAT';
   	}

   	else if(e == 'http://evolution.genetics.washington.edu/phylip.html') {
   		clickedElement = 'PHILYP';
   	}

   	else if(e == 'http://www.ebi.ac.uk/Tools/clustalw2/index.html') {
   		clickedElement = 'ClustalW2';
   	}

   	else if(e == 'http://mummer.sourceforge.net/') {
   		clickedElement = 'MUMmer';
   	}

   	else if(e == 'http://www.drive5.com/muscle/') {
   		clickedElement = 'MUSCLE';
   	}

	else if(e == 'http://apollo.berkeleybop.org/current/index.html') {
		clickedElement = 'Apollo';
	}   	

	else if(e == 'http://gmod.org/wiki/GBrowse') {
		clickedElement = 'GBrowse';
	}

	else if(e == 'http://derringer.genetics.utah.edu/cgi-bin/MWAS/maker.cgi') {
		clickedElement = 'Maker Web Annotation Service';
	}

	else if(e == 'http://www.repeatmasker.org/') {
		clickedElement = 'RepeatMasker';
	}

	else if(e == 'http://target.iplantcollaborative.org/') {
		clickedElement = 'TARGeT';
	}

	else if(e == 'http://lowelab.ucsc.edu/tRNAscan-SE/') {
		clickedElement = 'tRNAscan-SE';
	}

	else if(e == 'http://www.bioinformatics.babraham.ac.uk/projects/fastqc/') {
		clickedElement = 'FastQC';
	}

	else if(e == 'http://hannonlab.cshl.edu/fastx_toolkit') {
		clickedElement = 'Fastx-toolkit';
	}

	else if(e == 'https://tophat.com/') {
		clickedElement = 'TopHat';
	}

	else if(e == 'http://cole-trapnell-lab.github.io/cufflinks/') {
		clickedElement = 'Cufflinks';
	}

	else if(e == 'http://cole-trapnell-lab.github.io/cufflinks/cuffdiff/') {
		clickedElement = 'Cuffdiff';
	}

    else if(e.target == 'https://dnasubway.cyverse.org/project/browse/1/owner/desc?') {
    	clickedElement = 'Sort Public Project by Owner desc';
    }

    else if(e.target == 'https://dnasubway.cyverse.org/project/browse/1/owner/asc?') {
    	clickedElement = 'Sort Public Project by Owner asc';
    }

    else if(e.target == 'https://dnasubway.cyverse.org/project/browse/1/title/desc?') {
    	clickedElement = 'Sort Public Project by Title desc';
    }

    else if(e.target == 'https://dnasubway.cyverse.org/project/browse/1/title/asc?') {
    	clickedElement = 'Sort Public Project by Title asc';
	}

    else if(e.target == 'https://dnasubway.cyverse.org/project/browse/1/date/desc?') {
    	clickedElement = 'Sort Public Project by Date desc';
    }

    else if(e.target == 'https://dnasubway.cyverse.org/project/browse/1/date/asc?') {
    	clickedElement = 'Sort Public Project by Date asc';
    }

   	else if(e.target == 'http://www.dnabarcoding101.org/') {
   		clickedElement = 'DNA Bar Coding 101';
   	}

   	else if(e.target == 'https://cyverse-dnasubway-guide.readthedocs-hosted.com/en/latest/') {
   		clickedElement = 'DNA User Guide';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/files/pdf/DNA_Subway_Poster.pdf') {
   		clickedElement = 'DNA Subway Poster';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/about/') {
   		clickedElement = 'About Page';
   	}

   	else if(e.target == 'http://www.dnalc.org/') {
   		clickedElement = 'DNA Learning Center';
   	}

   	else if(e.target == 'http://www.iplantcollaborative.org/') {
   		clickedElement = 'iplantcollaborative link';
   		//broken link
   	}

   	else if(e.target == 'http://www.nsf.gov/') {
   		clickedElement = 'NSF Link';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/about/credits.html') {
   		clickedElement = 'Credit Page';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/about/resources.html') {
   		clickedElement = 'Resources';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/feedback.html') {
   		clickedElement = 'Feedback';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/files/pdf/DNA_Subway_Guide.pdf') {
   		clickedElement = 'User Manual';
   	}

   	else if(e.target == 'http://gfx.dnalc.org/files/apollo/test/test_apollo.jnlp') {
   		clickedElement = 'Downloading Apollo';
   	}

   	else if(e.target == 'https://java.com/en/download/help/enable_browser.xml') {
   		clickedElement = 'Enabling Java';
   	}

   	else if(e.target == 'https://www.java.com/en/download/installed.jsp') {
   		clickedElement = 'Verifying Java';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/about/help.html') {
   		clickedElement = 'Help Button';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/') {
   		clickedElement = 'Home Button';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/browsemy') {
   		clickedElement = 'My Projects';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/browse') {
   		clickedElement = 'Public Projects';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/create_project.html') {
   		clickedElement = 'Classic Red Line';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/annot/create_project.html') {
   		clickedElement = 'Apollo Red Line';
  	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/target/create') {
   		clickedElement = 'Yellow Line';
   	}

   	else if(e.target == 'https://dnasubway.cyverse.org/project/phylogenetics/create_project.html') {
   		clickedElement = 'Blue Line';
   	}

   	else if(clickedType == 'input' || clickedType == 'textarea') {
   		clickedElement = e.target.id;
    }

    else if(e.target == '') {
    	clickedElement = 'misclick';
    }

    else if(e.target.innerText == '') {
    	clickedElement = e.target.id;
    }

    else {
    	clickedElement = e.target.innerText;
	}

    return clickedElement;
}