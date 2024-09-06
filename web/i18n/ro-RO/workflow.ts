const translation = {
  common: {
    undo: 'Anulează',
    redo: 'Refă',
    editing: 'Editare',
    autoSaved: 'Salvat automat',
    unpublished: 'Nepublicat',
    published: 'Publicat',
    publish: 'Publică',
    update: 'Actualizează',
    run: 'Rulează',
    running: 'Rulând',
    inRunMode: 'În modul de rulare',
    inPreview: 'În previzualizare',
    inPreviewMode: 'În modul de previzualizare',
    preview: 'Previzualizează',
    viewRunHistory: 'Vezi istoricul rulărilor',
    runHistory: 'Istoric rulări',
    goBackToEdit: 'Înapoi la editor',
    conversationLog: 'Jurnal conversație',
    features: 'Funcționalități',
    debugAndPreview: 'Previzualizare',
    restart: 'Repornește',
    currentDraft: 'Schimbare curentă',
    currentDraftUnpublished: 'Schimbare curentă nepublicată',
    latestPublished: 'Ultima publicare',
    publishedAt: 'Publicat la',
    restore: 'Restaurează',
    runApp: 'Rulează aplicația',
    batchRunApp: 'Rulează aplicația în lot',
    accessAPIReference: 'Accesează referința API',
    embedIntoSite: 'Incorporează în site',
    addTitle: 'Adaugă titlu...',
    addDescription: 'Adaugă descriere...',
    noVar: 'Fără variabilă',
    searchVar: 'Caută variabilă',
    variableNamePlaceholder: 'Nume variabilă',
    setVarValuePlaceholder: 'Setează valoarea variabilei',
    needConnecttip: 'Acest pas nu este conectat la nimic',
    maxTreeDepth: 'Limită maximă de {{depth}} noduri pe ramură',
    needEndNode: 'Trebuie adăugat blocul de sfârșit',
    needAnswerNode: 'Trebuie adăugat blocul de răspuns',
    workflowProcess: 'Proces de flux de lucru',
    notRunning: 'Încă nu rulează',
    previewPlaceholder: 'Introduceți conținutul în caseta de mai jos pentru a începe depanarea Chatbotului',
    effectVarConfirm: {
      title: 'Elimină variabila',
      content: 'Variabila este utilizată în alte noduri. Doriți să o eliminați oricum?',
    },
    insertVarTip: 'Apăsați tasta \'/\' pentru a insera rapid',
    processData: 'Procesează date',
    input: 'Intrare',
    output: 'Ieșire',
    jinjaEditorPlaceholder: 'Tastați \'/\' sau \'{\' pentru a insera variabila',
    viewOnly: 'Vizualizare doar',
    showRunHistory: 'Afișează istoricul rulărilor',
    enableJinja: 'Activează suportul pentru șabloane Jinja',
    learnMore: 'Află mai multe',
    copy: 'Copiază',
    duplicate: 'Duplică',
    addBlock: 'Adaugă bloc',
    pasteHere: 'Lipește aici',
    pointerMode: 'Modul pointer',
    handMode: 'Modul mână',
    model: 'Model',
    workflowAsTool: 'Flux de lucru ca instrument',
    configureRequired: 'Configurare necesară',
    configure: 'Configurează',
    manageInTools: 'Gestionează în instrumente',
    workflowAsToolTip: 'Reconfigurarea instrumentului este necesară după actualizarea fluxului de lucru.',
    viewDetailInTracingPanel: 'Vezi detalii',
    overwriteAndImport: 'Suprascriere și import',
    chooseDSL: 'Alegeți fișierul DSL(yml)',
    syncingData: 'Sincronizarea datelor, doar câteva secunde.',
    importDSL: 'Importați DSL',
    importFailure: 'Eșecul importului',
    importSuccess: 'Succesul importului',
    backupCurrentDraft: 'Backup curent draft',
    importDSLTip: 'Proiectul curent va fi suprascris. Exportați fluxul de lucru ca backup înainte de import.',
  },
  env: {
    envPanelTitle: 'Variabile de Mediu',
    envDescription: 'Variabilele de mediu pot fi utilizate pentru a stoca informații private și credențiale. Acestea sunt doar pentru citire și pot fi separate de fișierul DSL în timpul exportului.',
    envPanelButton: 'Adaugă Variabilă',
    modal: {
      title: 'Adaugă Variabilă de Mediu',
      editTitle: 'Editează Variabilă de Mediu',
      type: 'Tip',
      name: 'Nume',
      namePlaceholder: 'nume mediu',
      value: 'Valoare',
      valuePlaceholder: 'valoare mediu',
      secretTip: 'Utilizat pentru a defini informații sau date sensibile, cu setări DSL configurate pentru prevenirea scurgerilor.',
    },
    export: {
      title: 'Exportă variabile de mediu secrete?',
      checkbox: 'Exportă valori secrete',
      ignore: 'Exportă DSL',
      export: 'Exportă DSL cu valori secrete',
    },
  },
  chatVariable: {
    panelTitle: 'Variabile de Conversație',
    panelDescription: 'Variabilele de Conversație sunt utilizate pentru a stoca informații interactive pe care LLM trebuie să le rețină, inclusiv istoricul conversației, fișiere încărcate, preferințele utilizatorului. Acestea sunt citibile și inscriptibile.',
    docLink: 'Vizitați documentația noastră pentru a afla mai multe.',
    button: 'Adăugare Variabilă',
    modal: {
      title: 'Adăugare Variabilă de Conversație',
      editTitle: 'Editare Variabilă de Conversație',
      name: 'Nume',
      namePlaceholder: 'Numele variabilei',
      type: 'Tip',
      value: 'Valoare Implicită',
      valuePlaceholder: 'Valoare implicită, lăsați gol pentru a nu seta',
      description: 'Descriere',
      descriptionPlaceholder: 'Descrieți variabila',
      editInJSON: 'Editare în JSON',
      oneByOne: 'Adăugare una câte una',
      editInForm: 'Editare în Formular',
      arrayValue: 'Valoare',
      addArrayValue: 'Adăugare Valoare',
      objectKey: 'Cheie',
      objectType: 'Tip',
      objectValue: 'Valoare Implicită',
    },
    storedContent: 'Conținut stocat',
    updatedAt: 'Actualizat la ',
  },
  changeHistory: {
    title: 'Istoric modificări',
    placeholder: 'Nu ați schimbat nimic încă',
    clearHistory: 'Șterge istoricul',
    hint: 'Sfat',
    hintText: 'Acțiunile dvs. de editare sunt urmărite într-un istoric al modificărilor, care este stocat pe dispozitivul dvs. pe durata acestei sesiuni. Acest istoric va fi șters când veți părăsi editorul.',
    stepBackward_one: '{{count}} pas înapoi',
    stepBackward_other: '{{count}} pași înapoi',
    stepForward_one: '{{count}} pas înainte',
    stepForward_other: '{{count}} pași înainte',
    sessionStart: 'Începutul sesiuni',
    currentState: 'Stare actuală',
    nodeTitleChange: 'Titlul blocului a fost schimbat',
    nodeDescriptionChange: 'Descrierea blocului a fost schimbată',
    nodeDragStop: 'Bloc mutat',
    nodeChange: 'Bloc schimbat',
    nodeConnect: 'Bloc conectat',
    nodePaste: 'Bloc lipit',
    nodeDelete: 'Bloc șters',
    nodeAdd: 'Bloc adăugat',
    nodeResize: 'Bloc redimensionat',
    noteAdd: 'Notă adăugată',
    noteChange: 'Notă modificată',
    noteDelete: 'Notă ștearsă',
    edgeDelete: 'Bloc deconectat',
  },
  errorMsg: {
    fieldRequired: '{{field}} este obligatoriu',
    authRequired: 'Autorizarea este necesară',
    invalidJson: '{{field}} este un JSON invalid',
    fields: {
      variable: 'Nume variabilă',
      variableValue: 'Valoare variabilă',
      code: 'Cod',
      model: 'Model',
      rerankModel: 'Model de rerankare',
    },
    invalidVariable: 'Variabilă invalidă',
  },
  singleRun: {
    testRun: 'Rulare de test ',
    startRun: 'Începe rularea',
    running: 'Rulând',
    testRunIteration: 'Iterație rulare de test',
    back: 'Înapoi',
    iteration: 'Iterație',
  },
  tabs: {
    'searchBlock': 'Caută bloc',
    'blocks': 'Blocuri',
    'tools': 'Instrumente',
    'allTool': 'Toate',
    'builtInTool': 'Integrat',
    'customTool': 'Personalizat',
    'workflowTool': 'Flux de lucru',
    'question-understand': 'Înțelegerea întrebărilor',
    'logic': 'Logică',
    'transform': 'Transformare',
    'utilities': 'Utilități',
    'noResult': 'Niciun rezultat găsit',
    'searchTool': 'Instrument de căutare',
  },
  blocks: {
    'start': 'Începe',
    'end': 'Sfârșit',
    'answer': 'Răspuns',
    'llm': 'LLM',
    'knowledge-retrieval': 'Recuperare de cunoștințe',
    'question-classifier': 'Clasificator de întrebări',
    'if-else': 'Dacă/Altminteri',
    'code': 'Cod',
    'template-transform': 'Șablon',
    'http-request': 'Cerere HTTP',
    'variable-assigner': 'Asignator de variabile',
    'variable-aggregator': 'Agregator de variabile',
    'assigner': 'Asignator de Variabile',
    'iteration-start': 'Început de iterație',
    'iteration': 'Iterație',
    'parameter-extractor': 'Extractor de parametri',
  },
  blocksAbout: {
    'start': 'Definiți parametrii inițiali pentru lansarea unui flux de lucru',
    'end': 'Definiți sfârșitul și tipul rezultatului unui flux de lucru',
    'answer': 'Definiți conținutul răspunsului unei conversații',
    'llm': 'Invocarea modelelor de limbaj mari pentru a răspunde la întrebări sau pentru a procesa limbajul natural',
    'knowledge-retrieval': 'Permite interogarea conținutului textului legat de întrebările utilizatorului din baza de cunoștințe',
    'question-classifier': 'Definiți condițiile de clasificare a întrebărilor utilizatorului, LLM poate defini cum progresează conversația pe baza descrierii clasificării',
    'if-else': 'Permite împărțirea fluxului de lucru în două ramuri pe baza condițiilor if/else',
    'code': 'Executați un fragment de cod Python sau NodeJS pentru a implementa logică personalizată',
    'template-transform': 'Convertiți datele în șiruri de caractere folosind sintaxa șablonului Jinja',
    'http-request': 'Permite trimiterea cererilor de server prin protocolul HTTP',
    'variable-assigner': 'Agregarea variabilelor din mai multe ramuri într-o singură variabilă pentru configurarea unificată a nodurilor ulterioare.',
    'assigner': 'Nodul de atribuire a variabilelor este utilizat pentru a atribui valori variabilelor inscriptibile (precum variabilele de conversație).',
    'variable-aggregator': 'Agregarea variabilelor din mai multe ramuri într-o singură variabilă pentru configurarea unificată a nodurilor ulterioare.',
    'iteration': 'Efectuați mai mulți pași pe un obiect listă până când toate rezultatele sunt produse.',
    'parameter-extractor': 'Utilizați LLM pentru a extrage parametrii structurați din limbajul natural pentru invocările de instrumente sau cererile HTTP.',
  },
  operator: {
    zoomIn: 'Mărește',
    zoomOut: 'Micșorează',
    zoomTo50: 'Mărește la 50%',
    zoomTo100: 'Mărește la 100%',
    zoomToFit: 'Mărește pentru a se potrivi',
  },
  panel: {
    userInputField: 'Câmp de introducere utilizator',
    changeBlock: 'Schimbă blocul',
    helpLink: 'Link de ajutor',
    about: 'Despre',
    createdBy: 'Creat de ',
    nextStep: 'Pasul următor',
    addNextStep: 'Adăugați următorul bloc în acest flux de lucru',
    selectNextStep: 'Selectați următorul bloc',
    runThisStep: 'Rulează acest pas',
    checklist: 'Lista de verificare',
    checklistTip: 'Asigurați-vă că toate problemele sunt rezolvate înainte de publicare',
    checklistResolved: 'Toate problemele au fost rezolvate',
    organizeBlocks: 'Organizează blocurile',
    change: 'Schimbă',
    optional: '(opțional)',
  },
  nodes: {
    common: {
      outputVars: 'Variabile de ieșire',
      insertVarTip: 'Inserează variabilă',
      memory: {
        memory: 'Memorie',
        memoryTip: 'Setări de memorie pentru conversație',
        windowSize: 'Dimensiunea ferestrei',
        conversationRoleName: 'Numele rolului în conversație',
        user: 'Prefix utilizator',
        assistant: 'Prefix asistent',
      },
      memories: {
        title: 'Amintiri',
        tip: 'Memoria conversației',
        builtIn: 'Integrat',
      },
    },
    start: {
      required: 'necesar',
      inputField: 'Câmp de intrare',
      builtInVar: 'Variabile integrate',
      outputVars: {
        query: 'Intrare utilizator',
        memories: {
          des: 'Istoric conversație',
          type: 'tip mesaj',
          content: 'conținut mesaj',
        },
        files: 'Listă de fișiere',
      },
      noVarTip: 'Setați intrările care pot fi utilizate în fluxul de lucru',
    },
    end: {
      outputs: 'Ieșiri',
      output: {
        type: 'tip ieșire',
        variable: 'variabilă de ieșire',
      },
      type: {
        'none': 'Nimic',
        'plain-text': 'Text simplu',
        'structured': 'Structurat',
      },
    },
    answer: {
      answer: 'Răspuns',
      outputVars: 'Variabile de ieșire',
    },
    llm: {
      model: 'model',
      variables: 'variabile',
      context: 'context',
      contextTooltip: 'Puteți importa cunoștințe ca și context',
      notSetContextInPromptTip: 'Pentru a activa funcția de context, completați variabila de context în PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Dați instrucțiuni de nivel înalt pentru conversație',
        user: 'Furnizați instrucțiuni, întrebări sau orice intrare bazată pe text pentru model',
        assistant: 'Răspunsurile modelului bazate pe mesajele utilizatorului',
      },
      addMessage: 'Adaugă mesaj',
      vision: 'viziune',
      files: 'Fișiere',
      resolution: {
        name: 'Rezoluție',
        high: 'Înaltă',
        low: 'Joasă',
      },
      outputVars: {
        output: 'Conținut generat',
        usage: 'Informații de utilizare a modelului',
      },
      singleRun: {
        variable: 'Variabilă',
      },
      sysQueryInUser: 'sys.query în mesajul utilizatorului este necesar',
    },
    knowledgeRetrieval: {
      queryVariable: 'Variabilă de interogare',
      knowledge: 'Cunoștințe',
      outputVars: {
        output: 'Date segmentate recuperate',
        content: 'Conținut segmentat',
        title: 'Titlu segmentat',
        icon: 'Pictogramă segmentată',
        url: 'URL segmentat',
        metadata: 'Alte metadate',
      },
    },
    http: {
      inputVars: 'Variabile de intrare',
      api: 'API',
      apiPlaceholder: 'Introduceți URL-ul, tastați ‘/’ pentru a insera variabilă',
      notStartWithHttp: 'API-ul trebuie să înceapă cu http:// sau https://',
      key: 'Cheie',
      value: 'Valoare',
      bulkEdit: 'Editare în masă',
      keyValueEdit: 'Editare cheie-valoare',
      headers: 'Antete',
      params: 'Parametri',
      body: 'Corp',
      outputVars: {
        body: 'Conținutul răspunsului',
        statusCode: 'Cod de stare al răspunsului',
        headers: 'Lista antetelor de răspuns în format JSON',
        files: 'Lista fișierelor',
      },
      authorization: {
        'authorization': 'Autorizare',
        'authorizationType': 'Tip de autorizare',
        'no-auth': 'Niciuna',
        'api-key': 'Cheie API',
        'auth-type': 'Tip de autentificare',
        'basic': 'De bază',
        'bearer': 'Bearer',
        'custom': 'Personalizat',
        'api-key-title': 'Cheie API',
        'header': 'Antet',
      },
      insertVarPlaceholder: 'tastați \'/\' pentru a insera variabilă',
      timeout: {
        title: 'Timp limită',
        connectLabel: 'Timp limită pentru conexiune',
        connectPlaceholder: 'Introduceți timpul limită pentru conexiune în secunde',
        readLabel: 'Timp limită pentru citire',
        readPlaceholder: 'Introduceți timpul limită pentru citire în secunde',
        writeLabel: 'Timp limită pentru scriere',
        writePlaceholder: 'Introduceți timpul limită pentru scriere în secunde',
      },
    },
    code: {
      inputVars: 'Variabile de intrare',
      outputVars: 'Variabile de ieșire',
      advancedDependencies: 'Dependențe avansate',
      advancedDependenciesTip: 'Adăugați câteva dependențe preîncărcate care necesită mai mult timp pentru a consuma sau nu sunt integrate implicit aici',
      searchDependencies: 'Căutați dependențe',
    },
    templateTransform: {
      inputVars: 'Variabile de intrare',
      code: 'Cod',
      codeSupportTip: 'Suportă doar Jinja2',
      outputVars: {
        output: 'Conținut transformat',
      },
    },
    ifElse: {
      if: 'Dacă',
      else: 'Altminteri',
      elseDescription: 'Utilizat pentru a defini logica care ar trebui executată atunci când condiția if nu este îndeplinită.',
      and: 'și',
      or: 'sau',
      operator: 'Operator',
      notSetVariable: 'Vă rugăm să setați mai întâi variabila',
      comparisonOperator: {
        'contains': 'conține',
        'not contains': 'nu conține',
        'start with': 'începe cu',
        'end with': 'se termină cu',
        'is': 'este',
        'is not': 'nu este',
        'empty': 'este gol',
        'not empty': 'nu este gol',
        'null': 'este null',
        'not null': 'nu este null',
      },
      enterValue: 'Introduceți valoarea',
      addCondition: 'Adăugați condiție',
      conditionNotSetup: 'Condiția NU este setată',
      selectVariable: 'Selectați variabila...',
    },
    variableAssigner: {
      title: 'Atribuie variabile',
      outputType: 'Tip de ieșire',
      varNotSet: 'Variabila nu este setată',
      noVarTip: 'Adăugați variabilele de atribuit',
      type: {
        string: 'Șir',
        number: 'Număr',
        object: 'Obiect',
        array: 'Array',
      },
      aggregationGroup: 'Grup de agregare',
      aggregationGroupTip: 'Activarea acestei funcții permite agregatorului de variabile să agrege mai multe seturi de variabile.',
      addGroup: 'Adăugați grup',
      outputVars: {
        varDescribe: 'Ieșire {{groupName}}',
      },
      setAssignVariable: 'Setați variabila de atribuire',
    },
    assigner: {
      'assignedVariable': 'Variabilă Atribuită',
      'writeMode': 'Mod de Scriere',
      'writeModeTip': 'Când VARIABILA ATRIBUITĂ este un array, modul de adăugare adaugă la sfârșit.',
      'over-write': 'Suprascrie',
      'append': 'Adaugă',
      'plus': 'Plus',
      'clear': 'Șterge',
      'setVariable': 'Setează Variabila',
      'variable': 'Variabilă',
    },
    tool: {
      toAuthorize: 'Autorizați',
      inputVars: 'Variabile de intrare',
      outputVars: {
        text: 'conținut generat de instrument',
        files: {
          title: 'fișiere generate de instrument',
          type: 'Tip de suport. Acum acceptă doar imagine',
          transfer_method: 'Metodă de transfer. Valoarea este remote_url sau local_file',
          url: 'URL imagine',
          upload_file_id: 'ID fișier încărcat',
        },
        json: 'JSON generat de instrument',
      },
    },
    questionClassifiers: {
      model: 'model',
      inputVars: 'Variabile de intrare',
      outputVars: {
        className: 'Nume clasă',
      },
      class: 'Clasă',
      classNamePlaceholder: 'Scrieți numele clasei',
      advancedSetting: 'Setare avansată',
      topicName: 'Nume subiect',
      topicPlaceholder: 'Scrieți numele subiectului',
      addClass: 'Adăugați clasă',
      instruction: 'Instrucțiune',
      instructionTip: 'Introduceți instrucțiuni suplimentare pentru a ajuta clasificatorul de întrebări să înțeleagă mai bine cum să categorizeze întrebările.',
      instructionPlaceholder: 'Scrieți instrucțiunea',
    },
    parameterExtractor: {
      inputVar: 'Variabilă de intrare',
      extractParameters: 'Extrageți parametrii',
      importFromTool: 'Importă din instrumente',
      addExtractParameter: 'Adăugați parametru de extragere',
      addExtractParameterContent: {
        name: 'Nume',
        namePlaceholder: 'Nume parametru de extragere',
        type: 'Tip',
        typePlaceholder: 'Tip parametru de extragere',
        description: 'Descriere',
        descriptionPlaceholder: 'Descriere parametru de extragere',
        required: 'Necesar',
        requiredContent: 'Necesar este utilizat doar ca referință pentru inferența modelului și nu pentru validarea obligatorie a ieșirii parametrului.',
      },
      extractParametersNotSet: 'Parametrii de extragere nu sunt setați',
      instruction: 'Instrucțiune',
      instructionTip: 'Introduceți instrucțiuni suplimentare pentru a ajuta extractorul de parametri să înțeleagă cum să extragă parametrii.',
      advancedSetting: 'Setare avansată',
      reasoningMode: 'Mod de raționament',
      reasoningModeTip: 'Puteți alege modul de raționament potrivit în funcție de capacitatea modelului de a răspunde la instrucțiuni pentru apelarea funcțiilor sau prompturi.',
      isSuccess: 'Este succes. În caz de succes valoarea este 1, în caz de eșec valoarea este 0.',
      errorReason: 'Motivul erorii',
    },
    iteration: {
      deleteTitle: 'Ștergeți nodul de iterație?',
      deleteDesc: 'Ștergerea nodului de iterație va șterge toate nodurile copil',
      input: 'Intrare',
      output: 'Variabile de ieșire',
      iteration_one: '{{count}} Iterație',
      iteration_other: '{{count}} Iterații',
      currentIteration: 'Iterație curentă',
    },
    note: {
      editor: {
        small: 'Mic',
        bold: 'Îndrăzneț',
        unlink: 'Deconecta',
        strikethrough: 'Tăiere',
        invalidUrl: 'URL nevalidă',
        medium: 'Medie',
        openLink: 'Deschide',
        large: 'Mare',
        enterUrl: 'Introduceți adresa URL...',
        italic: 'Cursiv',
        placeholder: 'Scrie-ți notița...',
        link: 'Legătură',
        bulletList: 'Lista de marcatori',
        showAuthor: 'Afișați autorul',
      },
      addNote: 'Adăugați o notă',
    },
  },
  tracing: {
    stopBy: 'Oprit de {{user}}',
  },
}

export default translation
