// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  return {
    create: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    created: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5],
    log: [ctc6, ctc0],
    that: [ctc6, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc0
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  const map2_ctc = ctc6;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      9: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc10 = stdlib.T_Object({
    deadline: ctc3,
    description: ctc6,
    id: ctc3,
    isProposal: ctc7,
    link: ctc8,
    owner: ctc1,
    title: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Voters_contribute0_89: ctc11,
    Voters_downvote0_89: ctc12,
    Voters_upvote0_89: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc15 = stdlib.T_Contract;
  const ctc16 = stdlib.T_Struct([['id', ctc3], ['title', ctc9], ['link', ctc8], ['description', ctc6], ['owner', ctc1], ['contractInfo', ctc15]]);
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    Voters_contributed0_455: ctc14,
    Voters_created0_455: ctc17,
    Voters_downvoted0_455: ctc14,
    Voters_projectDown0_455: ctc11,
    Voters_timedOut0_455: ctc14,
    Voters_upvoted0_455: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v822 = stdlib.protect(ctc10, interact.getProposal, 'for Deployer\'s interact field getProposal');
  const v823 = v822.deadline;
  const v824 = v822.description;
  const v825 = v822.id;
  const v826 = v822.isProposal;
  const v827 = v822.link;
  const v828 = v822.owner;
  const v829 = v822.title;
  
  const txn1 = await (ctc.sendrecv({
    args: [v824, v826],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:76:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v840, v841], secs: v843, time: v842, didSend: v58, from: v839 } = txn1;
      
      ;
      if (v841) {
        sim_r.isHalt = false;
        }
      else {
        const v1180 = true;
        const v1181 = v842;
        
        if (await (async () => {
          
          return v1180;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v840, v841], secs: v843, time: v842, didSend: v58, from: v839 } = txn1;
  ;
  if (v841) {
    const txn2 = await (ctc.sendrecv({
      args: [v839, v840, v842, v829, v827, v828, v825, v823],
      evt_cnt: 5,
      funcNum: 1,
      lct: v842,
      onlyIf: true,
      out_tys: [ctc9, ctc8, ctc1, ctc3, ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:80:18:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v845, v846, v847, v848, v849], secs: v851, time: v850, didSend: v68, from: v844 } = txn2;
        
        ;
        const v853 = await ctc.getContractInfo();
        null;
        const v855 = stdlib.add(v842, v849);
        const v858 = stdlib.checkedBigNumberify('./index.rsh:91:32:decimal', stdlib.UInt_max, '0');
        const v859 = stdlib.checkedBigNumberify('./index.rsh:91:29:decimal', stdlib.UInt_max, '0');
        const v860 = v850;
        const v861 = v842;
        const v867 = stdlib.checkedBigNumberify('./index.rsh:72:11:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          const v871 = stdlib.gt(v855, v861);
          
          return v871;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v839,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc6, ctc3, ctc9, ctc8, ctc1, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v845, v846, v847, v848, v849], secs: v851, time: v850, didSend: v68, from: v844 } = txn2;
    ;
    const v852 = stdlib.addressEq(v839, v844);
    stdlib.assert(v852, {
      at: './index.rsh:80:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v853 = await ctc.getContractInfo();
    null;
    const v855 = stdlib.add(v842, v849);
    let v858 = stdlib.checkedBigNumberify('./index.rsh:91:32:decimal', stdlib.UInt_max, '0');
    let v859 = stdlib.checkedBigNumberify('./index.rsh:91:29:decimal', stdlib.UInt_max, '0');
    let v860 = v850;
    let v861 = v842;
    let v867 = stdlib.checkedBigNumberify('./index.rsh:72:11:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    while (await (async () => {
      const v871 = stdlib.gt(v855, v861);
      
      return v871;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc13],
        timeoutAt: ['time', v855],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v839, v847, v848, v855, v858, v859, v860, v867],
          evt_cnt: 0,
          funcNum: 4,
          lct: v860,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:119:26:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1087, time: v1086, didSend: v338, from: v1085 } = txn4;
            
            ;
            let v1089;
            const v1090 = stdlib.gt(v858, v859);
            if (v1090) {
              v1089 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v1091 = stdlib.eq(v859, v858);
              if (v1091) {
                v1089 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                v1089 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            const v1092 = stdlib.eq(v1089, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            if (v1092) {
              const v1093 = 'passed              ';
              null;
              const v1098 = stdlib.sub(v867, v867);
              sim_r.txns.push({
                kind: 'from',
                to: v847,
                tok: undefined /* Nothing */
                });
              const cv858 = v858;
              const cv859 = v859;
              const cv860 = v1086;
              const cv861 = v860;
              const cv867 = v1098;
              
              await (async () => {
                const v858 = cv858;
                const v859 = cv859;
                const v860 = cv860;
                const v861 = cv861;
                const v867 = cv867;
                
                if (await (async () => {
                  const v871 = stdlib.gt(v855, v861);
                  
                  return v871;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}
            else {
              const v1103 = stdlib.gt(v867, stdlib.checkedBigNumberify('./index.rsh:124:37:decimal', stdlib.UInt_max, '0'));
              if (v1103) {
                const v1104 = 'failed              ';
                null;
                const v1106 = v867;
                const v1107 = v1086;
                const v1108 = v860;
                const v1114 = v867;
                
                if (await (async () => {
                  const v1117 = stdlib.gt(v1106, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
                  
                  return v1117;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1165 = 'down                ';
                  null;
                  const cv858 = v858;
                  const cv859 = v859;
                  const cv860 = v1107;
                  const cv861 = v1108;
                  const cv867 = v1114;
                  
                  await (async () => {
                    const v858 = cv858;
                    const v859 = cv859;
                    const v860 = cv860;
                    const v861 = cv861;
                    const v867 = cv867;
                    
                    if (await (async () => {
                      const v871 = stdlib.gt(v855, v861);
                      
                      return v871;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v839,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}}
              else {
                const v1169 = 'down                ';
                null;
                const cv858 = v858;
                const cv859 = v859;
                const cv860 = v1086;
                const cv861 = v860;
                const cv867 = v867;
                
                await (async () => {
                  const v858 = cv858;
                  const v859 = cv859;
                  const v860 = cv860;
                  const v861 = cv861;
                  const v867 = cv867;
                  
                  if (await (async () => {
                    const v871 = stdlib.gt(v855, v861);
                    
                    return v871;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v839,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1087, time: v1086, didSend: v338, from: v1085 } = txn4;
        ;
        const v1088 = stdlib.addressEq(v839, v1085);
        stdlib.assert(v1088, {
          at: './index.rsh:119:26:dot',
          fs: ['at ./index.rsh:118:42:application call to [unknown function] (defined at: ./index.rsh:118:42:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v1089;
        const v1090 = stdlib.gt(v858, v859);
        if (v1090) {
          v1089 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v1091 = stdlib.eq(v859, v858);
          if (v1091) {
            v1089 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v1089 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        const v1092 = stdlib.eq(v1089, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1092) {
          const v1093 = 'passed              ';
          null;
          const v1098 = stdlib.sub(v867, v867);
          ;
          const cv858 = v858;
          const cv859 = v859;
          const cv860 = v1086;
          const cv861 = v860;
          const cv867 = v1098;
          
          v858 = cv858;
          v859 = cv859;
          v860 = cv860;
          v861 = cv861;
          v867 = cv867;
          
          continue;}
        else {
          const v1103 = stdlib.gt(v867, stdlib.checkedBigNumberify('./index.rsh:124:37:decimal', stdlib.UInt_max, '0'));
          if (v1103) {
            const v1104 = 'failed              ';
            null;
            let v1106 = v867;
            let v1107 = v1086;
            let v1108 = v860;
            let v1114 = v867;
            
            while (await (async () => {
              const v1117 = stdlib.gt(v1106, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
              
              return v1117;})()) {
              const txn5 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 6,
                out_tys: [ctc12],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1124], secs: v1126, time: v1125, didSend: v386, from: v1123 } = txn5;
              undefined /* setApiDetails */;
              ;
              const v1128 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1123), null);
              let v1129;
              switch (v1128[0]) {
                case 'None': {
                  const v1130 = v1128[1];
                  v1129 = stdlib.checkedBigNumberify('./index.rsh:126:71:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1131 = v1128[1];
                  v1129 = v1131;
                  
                  break;
                  }
                }
              const v1133 = stdlib.ge(v1114, v1129);
              const v1134 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1123), null);
              let v1135;
              switch (v1134[0]) {
                case 'None': {
                  const v1136 = v1134[1];
                  v1135 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1137 = v1134[1];
                  v1135 = true;
                  
                  break;
                  }
                }
              const v1138 = v1133 ? v1135 : false;
              if (v1138) {
                const v1139 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1123), null);
                let v1140;
                switch (v1139[0]) {
                  case 'None': {
                    const v1141 = v1139[1];
                    v1140 = v839;
                    
                    break;
                    }
                  case 'Some': {
                    const v1142 = v1139[1];
                    v1140 = v1142;
                    
                    break;
                    }
                  }
                const v1146 = stdlib.sub(v1114, v1129);
                ;
                await stdlib.mapSet(map2, v1123, undefined /* Nothing */);
                const v1148 = 'refundPassed        ';
                null;
                const v1149 = true;
                await txn5.getOutput('Voters_claimRefund', 'v1149', ctc7, v1149);
                const v1155 = stdlib.sub(v1106, v1129);
                const cv1106 = v1155;
                const cv1107 = v1125;
                const cv1108 = v1107;
                const cv1114 = v1146;
                
                v1106 = cv1106;
                v1107 = cv1107;
                v1108 = cv1108;
                v1114 = cv1114;
                
                continue;}
              else {
                const v1157 = 'refundFailed        ';
                null;
                const v1158 = false;
                await txn5.getOutput('Voters_claimRefund', 'v1158', ctc7, v1158);
                const cv1106 = v1106;
                const cv1107 = v1125;
                const cv1108 = v1107;
                const cv1114 = v1114;
                
                v1106 = cv1106;
                v1107 = cv1107;
                v1108 = cv1108;
                v1114 = cv1114;
                
                continue;}
              
              }
            const v1165 = 'down                ';
            null;
            const cv858 = v858;
            const cv859 = v859;
            const cv860 = v1107;
            const cv861 = v1108;
            const cv867 = v1114;
            
            v858 = cv858;
            v859 = cv859;
            v860 = cv860;
            v861 = cv861;
            v867 = cv867;
            
            continue;}
          else {
            const v1169 = 'down                ';
            null;
            const cv858 = v858;
            const cv859 = v859;
            const cv860 = v1086;
            const cv861 = v860;
            const cv867 = v867;
            
            v858 = cv858;
            v859 = cv859;
            v860 = cv860;
            v861 = cv861;
            v867 = cv867;
            
            continue;}}
        }
      else {
        const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn3;
        switch (v914[0]) {
          case 'Voters_contribute0_89': {
            const v917 = v914[1];
            undefined /* setApiDetails */;
            const v922 = v917[stdlib.checkedBigNumberify('./index.rsh:102:18:spread', stdlib.UInt_max, '0')];
            const v923 = stdlib.gt(v922, stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, '0'));
            stdlib.assert(v923, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./index.rsh:103:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:44:application call to [unknown function] (defined at: ./index.rsh:102:44:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:102:44:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)'],
              msg: 'Contribution too small',
              who: 'Deployer'
              });
            const v928 = stdlib.add(v867, v922);
            ;
            const v934 = v928;
            await txn3.getOutput('Voters_contribute', 'v934', ctc3, v934);
            const v941 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v913), null);
            let v942;
            switch (v941[0]) {
              case 'None': {
                const v943 = v941[1];
                v942 = false;
                
                break;
                }
              case 'Some': {
                const v944 = v941[1];
                v942 = true;
                
                break;
                }
              }
            if (v942) {
              const v945 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v913), null);
              let v946;
              switch (v945[0]) {
                case 'None': {
                  const v947 = v945[1];
                  v946 = stdlib.checkedBigNumberify('./index.rsh:108:71:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v948 = v945[1];
                  v946 = v948;
                  
                  break;
                  }
                }
              const v949 = stdlib.add(v946, v922);
              await stdlib.mapSet(map1, v913, v949);
              const cv858 = v858;
              const cv859 = v859;
              const cv860 = v915;
              const cv861 = v860;
              const cv867 = v928;
              
              v858 = cv858;
              v859 = cv859;
              v860 = cv860;
              v861 = cv861;
              v867 = cv867;
              
              continue;}
            else {
              await stdlib.mapSet(map0, v913, v913);
              await stdlib.mapSet(map1, v913, v922);
              await stdlib.mapSet(map2, v913, null);
              const cv858 = v858;
              const cv859 = v859;
              const cv860 = v915;
              const cv861 = v860;
              const cv867 = v928;
              
              v858 = cv858;
              v859 = cv859;
              v860 = cv860;
              v861 = cv861;
              v867 = cv867;
              
              continue;}
            break;
            }
          case 'Voters_downvote0_89': {
            const v973 = v914[1];
            undefined /* setApiDetails */;
            ;
            const v1012 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:99:35:decimal', stdlib.UInt_max, '1'));
            await txn3.getOutput('Voters_downvote', 'v1012', ctc3, v1012);
            const cv858 = v1012;
            const cv859 = v859;
            const cv860 = v915;
            const cv861 = v860;
            const cv867 = v867;
            
            v858 = cv858;
            v859 = cv859;
            v860 = cv860;
            v861 = cv861;
            v867 = cv867;
            
            continue;
            break;
            }
          case 'Voters_upvote0_89': {
            const v1029 = v914[1];
            undefined /* setApiDetails */;
            ;
            const v1077 = stdlib.add(v859, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
            await txn3.getOutput('Voters_upvote', 'v1077', ctc3, v1077);
            const cv858 = v858;
            const cv859 = v1077;
            const cv860 = v915;
            const cv861 = v860;
            const cv867 = v867;
            
            v858 = cv858;
            v859 = cv859;
            v860 = cv860;
            v861 = cv861;
            v867 = cv867;
            
            continue;
            break;
            }
          }}
      
      }
    ;
    return;
    
    
    }
  else {
    let v1180 = true;
    let v1181 = v842;
    
    while (await (async () => {
      
      return v1180;})()) {
      const txn2 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc18],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn2;
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          undefined /* setApiDetails */;
          ;
          const v1298 = v1287[stdlib.checkedBigNumberify('./index.rsh:185:17:spread', stdlib.UInt_max, '0')];
          const v1299 = v1287[stdlib.checkedBigNumberify('./index.rsh:185:17:spread', stdlib.UInt_max, '1')];
          const v1300 = null;
          await txn2.getOutput('Voters_contributed', 'v1300', ctc0, v1300);
          const v1308 = 'contributed         ';
          null;
          const cv1180 = true;
          const cv1181 = v1285;
          
          v1180 = cv1180;
          v1181 = cv1181;
          
          continue;
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          undefined /* setApiDetails */;
          ;
          const v1400 = v1377[stdlib.checkedBigNumberify('./index.rsh:157:17:spread', stdlib.UInt_max, '0')];
          const v1401 = null;
          await txn2.getOutput('Voters_created', 'v1401', ctc0, v1401);
          const v1414 = v1400.id;
          const v1415 = v1400.title;
          const v1416 = v1400.link;
          const v1417 = v1400.description;
          const v1418 = v1400.owner;
          const v1419 = v1400.contractInfo;
          null;
          const cv1180 = true;
          const cv1181 = v1285;
          
          v1180 = cv1180;
          v1181 = cv1181;
          
          continue;
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          undefined /* setApiDetails */;
          ;
          const v1511 = v1467[stdlib.checkedBigNumberify('./index.rsh:178:17:spread', stdlib.UInt_max, '0')];
          const v1512 = v1467[stdlib.checkedBigNumberify('./index.rsh:178:17:spread', stdlib.UInt_max, '1')];
          const v1513 = null;
          await txn2.getOutput('Voters_downvoted', 'v1513', ctc0, v1513);
          const v1521 = 'downvoted           ';
          null;
          const cv1180 = true;
          const cv1181 = v1285;
          
          v1180 = cv1180;
          v1181 = cv1181;
          
          continue;
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          undefined /* setApiDetails */;
          ;
          const v1613 = v1557[stdlib.checkedBigNumberify('./index.rsh:199:17:spread', stdlib.UInt_max, '0')];
          const v1614 = null;
          await txn2.getOutput('Voters_projectDown', 'v1614', ctc0, v1614);
          const v1621 = 'projectDown         ';
          const v1622 = stdlib.checkedBigNumberify('./index.rsh:202:64:decimal', stdlib.UInt_max, '0');
          null;
          const cv1180 = true;
          const cv1181 = v1285;
          
          v1180 = cv1180;
          v1181 = cv1181;
          
          continue;
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          undefined /* setApiDetails */;
          ;
          const v1714 = v1647[stdlib.checkedBigNumberify('./index.rsh:192:17:spread', stdlib.UInt_max, '0')];
          const v1715 = v1647[stdlib.checkedBigNumberify('./index.rsh:192:17:spread', stdlib.UInt_max, '1')];
          const v1716 = null;
          await txn2.getOutput('Voters_timedOut', 'v1716', ctc0, v1716);
          const v1724 = 'timedOut            ';
          null;
          const cv1180 = true;
          const cv1181 = v1285;
          
          v1180 = cv1180;
          v1181 = cv1181;
          
          continue;
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          undefined /* setApiDetails */;
          ;
          const v1816 = v1737[stdlib.checkedBigNumberify('./index.rsh:171:17:spread', stdlib.UInt_max, '0')];
          const v1817 = v1737[stdlib.checkedBigNumberify('./index.rsh:171:17:spread', stdlib.UInt_max, '1')];
          const v1818 = null;
          await txn2.getOutput('Voters_upvoted', 'v1818', ctc0, v1818);
          const v1826 = 'upvoted             ';
          null;
          const cv1180 = true;
          const cv1181 = v1285;
          
          v1180 = cv1180;
          v1181 = cv1181;
          
          continue;
          break;
          }
        }
      
      }
    return;
    }
  
  };
export async function _Voters_claimRefund6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_claimRefund6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_claimRefund6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v839, v847, v848, v855, v858, v859, v1106, v1107, v1114] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v1120 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:131:33:application call to [unknown function] (defined at: ./index.rsh:131:33:function exp)', 'at ./index.rsh:131:33:application call to [unknown function] (defined at: ./index.rsh:131:33:function exp)', 'at ./index.rsh:118:42:application call to [unknown function] (defined at: ./index.rsh:118:42:function exp)'],
    msg: 'in',
    who: 'Voters_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v839, v847, v848, v855, v858, v859, v1106, v1107, v1114, v1120],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:131:33:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1124], secs: v1126, time: v1125, didSend: v386, from: v1123 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_claimRefund"
        });
      ;
      const v1128 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1123), null);
      let v1129;
      switch (v1128[0]) {
        case 'None': {
          const v1130 = v1128[1];
          v1129 = stdlib.checkedBigNumberify('./index.rsh:126:71:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1131 = v1128[1];
          v1129 = v1131;
          
          break;
          }
        }
      const v1133 = stdlib.ge(v1114, v1129);
      const v1134 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1123), null);
      let v1135;
      switch (v1134[0]) {
        case 'None': {
          const v1136 = v1134[1];
          v1135 = false;
          
          break;
          }
        case 'Some': {
          const v1137 = v1134[1];
          v1135 = true;
          
          break;
          }
        }
      const v1138 = v1133 ? v1135 : false;
      if (v1138) {
        const v1139 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1123), null);
        let v1140;
        switch (v1139[0]) {
          case 'None': {
            const v1141 = v1139[1];
            v1140 = v839;
            
            break;
            }
          case 'Some': {
            const v1142 = v1139[1];
            v1140 = v1142;
            
            break;
            }
          }
        const v1146 = stdlib.sub(v1114, v1129);
        sim_r.txns.push({
          kind: 'from',
          to: v1140,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1123, undefined /* Nothing */);
        const v1148 = 'refundPassed        ';
        null;
        const v1149 = true;
        const v1150 = await txn1.getOutput('Voters_claimRefund', 'v1149', ctc7, v1149);
        
        const v1155 = stdlib.sub(v1106, v1129);
        const v3148 = v1155;
        const v3149 = v1125;
        const v3151 = v1146;
        const v3152 = stdlib.gt(v1155, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
        if (v3152) {
          sim_r.isHalt = false;
          }
        else {
          const v3153 = 'down                ';
          null;
          const v3154 = v858;
          const v3155 = v859;
          const v3156 = v1125;
          const v3158 = v1146;
          const v3159 = stdlib.gt(v855, v1107);
          if (v3159) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v839,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1157 = 'refundFailed        ';
        null;
        const v1158 = false;
        const v1159 = await txn1.getOutput('Voters_claimRefund', 'v1158', ctc7, v1158);
        
        const v3160 = v1106;
        const v3161 = v1125;
        const v3163 = v1114;
        const v3164 = stdlib.gt(v1106, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
        if (v3164) {
          sim_r.isHalt = false;
          }
        else {
          const v3165 = 'down                ';
          null;
          const v3166 = v858;
          const v3167 = v859;
          const v3168 = v1125;
          const v3170 = v1114;
          const v3171 = stdlib.gt(v855, v1107);
          if (v3171) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v839,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1124], secs: v1126, time: v1125, didSend: v386, from: v1123 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1128 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1123), null);
  let v1129;
  switch (v1128[0]) {
    case 'None': {
      const v1130 = v1128[1];
      v1129 = stdlib.checkedBigNumberify('./index.rsh:126:71:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1131 = v1128[1];
      v1129 = v1131;
      
      break;
      }
    }
  const v1133 = stdlib.ge(v1114, v1129);
  const v1134 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1123), null);
  let v1135;
  switch (v1134[0]) {
    case 'None': {
      const v1136 = v1134[1];
      v1135 = false;
      
      break;
      }
    case 'Some': {
      const v1137 = v1134[1];
      v1135 = true;
      
      break;
      }
    }
  const v1138 = v1133 ? v1135 : false;
  if (v1138) {
    const v1139 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1123), null);
    let v1140;
    switch (v1139[0]) {
      case 'None': {
        const v1141 = v1139[1];
        v1140 = v839;
        
        break;
        }
      case 'Some': {
        const v1142 = v1139[1];
        v1140 = v1142;
        
        break;
        }
      }
    const v1146 = stdlib.sub(v1114, v1129);
    ;
    await stdlib.mapSet(map2, v1123, undefined /* Nothing */);
    const v1148 = 'refundPassed        ';
    null;
    const v1149 = true;
    const v1150 = await txn1.getOutput('Voters_claimRefund', 'v1149', ctc7, v1149);
    if (v386) {
      stdlib.protect(ctc0, await interact.out(v1124, v1150), {
        at: './index.rsh:131:34:application',
        fs: ['at ./index.rsh:131:34:application call to [unknown function] (defined at: ./index.rsh:131:34:function exp)', 'at ./index.rsh:139:43:application call to "notify" (defined at: ./index.rsh:131:63:function exp)', 'at ./index.rsh:131:63:application call to [unknown function] (defined at: ./index.rsh:131:63:function exp)', 'at ./index.rsh:118:42:application call to [unknown function] (defined at: ./index.rsh:118:42:function exp)'],
        msg: 'out',
        who: 'Voters_claimRefund'
        });
      }
    else {
      }
    
    const v1155 = stdlib.sub(v1106, v1129);
    const v3148 = v1155;
    const v3149 = v1125;
    const v3151 = v1146;
    const v3152 = stdlib.gt(v1155, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
    if (v3152) {
      return;
      }
    else {
      const v3153 = 'down                ';
      null;
      const v3154 = v858;
      const v3155 = v859;
      const v3156 = v1125;
      const v3158 = v1146;
      const v3159 = stdlib.gt(v855, v1107);
      if (v3159) {
        return;
        }
      else {
        ;
        return;
        }}}
  else {
    const v1157 = 'refundFailed        ';
    null;
    const v1158 = false;
    const v1159 = await txn1.getOutput('Voters_claimRefund', 'v1158', ctc7, v1158);
    if (v386) {
      stdlib.protect(ctc0, await interact.out(v1124, v1159), {
        at: './index.rsh:131:34:application',
        fs: ['at ./index.rsh:131:34:application call to [unknown function] (defined at: ./index.rsh:131:34:function exp)', 'at ./index.rsh:143:43:application call to "notify" (defined at: ./index.rsh:131:63:function exp)', 'at ./index.rsh:131:63:application call to [unknown function] (defined at: ./index.rsh:131:63:function exp)', 'at ./index.rsh:118:42:application call to [unknown function] (defined at: ./index.rsh:118:42:function exp)'],
        msg: 'out',
        who: 'Voters_claimRefund'
        });
      }
    else {
      }
    
    const v3160 = v1106;
    const v3161 = v1125;
    const v3163 = v1114;
    const v3164 = stdlib.gt(v1106, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
    if (v3164) {
      return;
      }
    else {
      const v3165 = 'down                ';
      null;
      const v3166 = v858;
      const v3167 = v859;
      const v3168 = v1125;
      const v3170 = v1114;
      const v3171 = stdlib.gt(v855, v1107);
      if (v3171) {
        return;
        }
      else {
        ;
        return;
        }}}
  
  
  };
export async function _Voters_contribute4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_contribute4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_contribute4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Voters_contribute0_89: ctc6,
    Voters_downvote0_89: ctc7,
    Voters_upvote0_89: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v839, v847, v848, v855, v858, v859, v860, v867] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v895 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:44:application call to [unknown function] (defined at: ./index.rsh:102:44:function exp)', 'at ./index.rsh:91:27:application call to "runVoters_contribute0_89" (defined at: ./index.rsh:102:18:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)'],
    msg: 'in',
    who: 'Voters_contribute'
    });
  const v896 = v895[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v898 = stdlib.gt(v896, stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v898, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:44:application call to [unknown function] (defined at: ./index.rsh:102:44:function exp)', 'at ./index.rsh:91:27:application call to "runVoters_contribute0_89" (defined at: ./index.rsh:102:18:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)'],
    msg: 'Contribution too small',
    who: 'Voters_contribute'
    });
  const v905 = ['Voters_contribute0_89', v895];
  
  const txn1 = await (ctc.sendrecv({
    args: [v839, v847, v848, v855, v858, v859, v860, v867, v905],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v896, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn1;
      
      switch (v914[0]) {
        case 'Voters_contribute0_89': {
          const v917 = v914[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_contribute"
            });
          const v922 = v917[stdlib.checkedBigNumberify('./index.rsh:102:18:spread', stdlib.UInt_max, '0')];
          const v928 = stdlib.add(v867, v922);
          sim_r.txns.push({
            amt: v922,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v934 = v928;
          const v935 = await txn1.getOutput('Voters_contribute', 'v934', ctc3, v934);
          
          const v941 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v913), null);
          let v942;
          switch (v941[0]) {
            case 'None': {
              const v943 = v941[1];
              v942 = false;
              
              break;
              }
            case 'Some': {
              const v944 = v941[1];
              v942 = true;
              
              break;
              }
            }
          if (v942) {
            const v945 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v913), null);
            let v946;
            switch (v945[0]) {
              case 'None': {
                const v947 = v945[1];
                v946 = stdlib.checkedBigNumberify('./index.rsh:108:71:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v948 = v945[1];
                v946 = v948;
                
                break;
                }
              }
            const v949 = stdlib.add(v946, v922);
            await stdlib.simMapSet(sim_r, 1, v913, v949);
            const v3172 = v858;
            const v3173 = v859;
            const v3174 = v915;
            const v3176 = v928;
            const v3177 = stdlib.gt(v855, v860);
            if (v3177) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 0, v913, v913);
            await stdlib.simMapSet(sim_r, 1, v913, v922);
            await stdlib.simMapSet(sim_r, 2, v913, null);
            const v3178 = v858;
            const v3179 = v859;
            const v3180 = v915;
            const v3182 = v928;
            const v3183 = stdlib.gt(v855, v860);
            if (v3183) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Voters_downvote0_89': {
          const v973 = v914[1];
          
          break;
          }
        case 'Voters_upvote0_89': {
          const v1029 = v914[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn1;
  switch (v914[0]) {
    case 'Voters_contribute0_89': {
      const v917 = v914[1];
      undefined /* setApiDetails */;
      const v922 = v917[stdlib.checkedBigNumberify('./index.rsh:102:18:spread', stdlib.UInt_max, '0')];
      const v923 = stdlib.gt(v922, stdlib.checkedBigNumberify('./index.rsh:103:29:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v923, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:103:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:44:application call to [unknown function] (defined at: ./index.rsh:102:44:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:102:44:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)'],
        msg: 'Contribution too small',
        who: 'Voters_contribute'
        });
      const v928 = stdlib.add(v867, v922);
      ;
      const v934 = v928;
      const v935 = await txn1.getOutput('Voters_contribute', 'v934', ctc3, v934);
      if (v251) {
        stdlib.protect(ctc0, await interact.out(v917, v935), {
          at: './index.rsh:102:19:application',
          fs: ['at ./index.rsh:102:19:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)', 'at ./index.rsh:106:27:application call to "notify" (defined at: ./index.rsh:105:43:function exp)', 'at ./index.rsh:105:43:application call to [unknown function] (defined at: ./index.rsh:105:43:function exp)'],
          msg: 'out',
          who: 'Voters_contribute'
          });
        }
      else {
        }
      
      const v941 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v913), null);
      let v942;
      switch (v941[0]) {
        case 'None': {
          const v943 = v941[1];
          v942 = false;
          
          break;
          }
        case 'Some': {
          const v944 = v941[1];
          v942 = true;
          
          break;
          }
        }
      if (v942) {
        const v945 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v913), null);
        let v946;
        switch (v945[0]) {
          case 'None': {
            const v947 = v945[1];
            v946 = stdlib.checkedBigNumberify('./index.rsh:108:71:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v948 = v945[1];
            v946 = v948;
            
            break;
            }
          }
        const v949 = stdlib.add(v946, v922);
        await stdlib.mapSet(map1, v913, v949);
        const v3172 = v858;
        const v3173 = v859;
        const v3174 = v915;
        const v3176 = v928;
        const v3177 = stdlib.gt(v855, v860);
        if (v3177) {
          return;
          }
        else {
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map0, v913, v913);
        await stdlib.mapSet(map1, v913, v922);
        await stdlib.mapSet(map2, v913, null);
        const v3178 = v858;
        const v3179 = v859;
        const v3180 = v915;
        const v3182 = v928;
        const v3183 = stdlib.gt(v855, v860);
        if (v3183) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'Voters_downvote0_89': {
      const v973 = v914[1];
      return;
      break;
      }
    case 'Voters_upvote0_89': {
      const v1029 = v914[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_contributed9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_contributed9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_contributed9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_455: ctc6,
    Voters_created0_455: ctc12,
    Voters_downvoted0_455: ctc6,
    Voters_projectDown0_455: ctc13,
    Voters_timedOut0_455: ctc6,
    Voters_upvoted0_455: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1240 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:185:17:application call to [unknown function] (defined at: ./index.rsh:185:17:function exp)', 'at ./index.rsh:154:41:application call to "runVoters_contributed0_455" (defined at: ./index.rsh:185:17:function exp)', 'at ./index.rsh:154:41:application call to [unknown function] (defined at: ./index.rsh:154:41:function exp)'],
    msg: 'in',
    who: 'Voters_contributed'
    });
  const v1250 = ['Voters_contributed0_455', v1240];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1250],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:185:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
      
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_contributed"
            });
          ;
          const v1298 = v1287[stdlib.checkedBigNumberify('./index.rsh:185:17:spread', stdlib.UInt_max, '0')];
          const v1299 = v1287[stdlib.checkedBigNumberify('./index.rsh:185:17:spread', stdlib.UInt_max, '1')];
          const v1300 = null;
          const v1301 = await txn1.getOutput('Voters_contributed', 'v1300', ctc0, v1300);
          
          const v1308 = 'contributed         ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
  switch (v1284[0]) {
    case 'Voters_contributed0_455': {
      const v1287 = v1284[1];
      undefined /* setApiDetails */;
      ;
      const v1298 = v1287[stdlib.checkedBigNumberify('./index.rsh:185:17:spread', stdlib.UInt_max, '0')];
      const v1299 = v1287[stdlib.checkedBigNumberify('./index.rsh:185:17:spread', stdlib.UInt_max, '1')];
      const v1300 = null;
      const v1301 = await txn1.getOutput('Voters_contributed', 'v1300', ctc0, v1300);
      if (v688) {
        stdlib.protect(ctc0, await interact.out(v1287, v1301), {
          at: './index.rsh:185:18:application',
          fs: ['at ./index.rsh:185:18:application call to [unknown function] (defined at: ./index.rsh:185:18:function exp)', 'at ./index.rsh:186:23:application call to "notify" (defined at: ./index.rsh:185:59:function exp)', 'at ./index.rsh:185:59:application call to [unknown function] (defined at: ./index.rsh:185:59:function exp)'],
          msg: 'out',
          who: 'Voters_contributed'
          });
        }
      else {
        }
      
      const v1308 = 'contributed         ';
      null;
      return;
      
      break;
      }
    case 'Voters_created0_455': {
      const v1377 = v1284[1];
      return;
      break;
      }
    case 'Voters_downvoted0_455': {
      const v1467 = v1284[1];
      return;
      break;
      }
    case 'Voters_projectDown0_455': {
      const v1557 = v1284[1];
      return;
      break;
      }
    case 'Voters_timedOut0_455': {
      const v1647 = v1284[1];
      return;
      break;
      }
    case 'Voters_upvoted0_455': {
      const v1737 = v1284[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_created9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_created9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_created9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc9 = stdlib.T_Contract;
  const ctc10 = stdlib.T_Struct([['id', ctc3], ['title', ctc6], ['link', ctc7], ['description', ctc8], ['owner', ctc1], ['contractInfo', ctc9]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_455: ctc12,
    Voters_created0_455: ctc11,
    Voters_downvoted0_455: ctc12,
    Voters_projectDown0_455: ctc13,
    Voters_timedOut0_455: ctc12,
    Voters_upvoted0_455: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1189 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:157:17:application call to [unknown function] (defined at: ./index.rsh:157:17:function exp)', 'at ./index.rsh:154:41:application call to "runVoters_created0_455" (defined at: ./index.rsh:157:17:function exp)', 'at ./index.rsh:154:41:application call to [unknown function] (defined at: ./index.rsh:154:41:function exp)'],
    msg: 'in',
    who: 'Voters_created'
    });
  const v1208 = ['Voters_created0_455', v1189];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1208],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:157:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
      
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_created"
            });
          ;
          const v1400 = v1377[stdlib.checkedBigNumberify('./index.rsh:157:17:spread', stdlib.UInt_max, '0')];
          const v1401 = null;
          const v1402 = await txn1.getOutput('Voters_created', 'v1401', ctc0, v1401);
          
          const v1414 = v1400.id;
          const v1415 = v1400.title;
          const v1416 = v1400.link;
          const v1417 = v1400.description;
          const v1418 = v1400.owner;
          const v1419 = v1400.contractInfo;
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
  switch (v1284[0]) {
    case 'Voters_contributed0_455': {
      const v1287 = v1284[1];
      return;
      break;
      }
    case 'Voters_created0_455': {
      const v1377 = v1284[1];
      undefined /* setApiDetails */;
      ;
      const v1400 = v1377[stdlib.checkedBigNumberify('./index.rsh:157:17:spread', stdlib.UInt_max, '0')];
      const v1401 = null;
      const v1402 = await txn1.getOutput('Voters_created', 'v1401', ctc0, v1401);
      if (v688) {
        stdlib.protect(ctc0, await interact.out(v1377, v1402), {
          at: './index.rsh:157:18:application',
          fs: ['at ./index.rsh:157:18:application call to [unknown function] (defined at: ./index.rsh:157:18:function exp)', 'at ./index.rsh:158:23:application call to "notify" (defined at: ./index.rsh:157:48:function exp)', 'at ./index.rsh:157:48:application call to [unknown function] (defined at: ./index.rsh:157:48:function exp)'],
          msg: 'out',
          who: 'Voters_created'
          });
        }
      else {
        }
      
      const v1414 = v1400.id;
      const v1415 = v1400.title;
      const v1416 = v1400.link;
      const v1417 = v1400.description;
      const v1418 = v1400.owner;
      const v1419 = v1400.contractInfo;
      null;
      return;
      
      break;
      }
    case 'Voters_downvoted0_455': {
      const v1467 = v1284[1];
      return;
      break;
      }
    case 'Voters_projectDown0_455': {
      const v1557 = v1284[1];
      return;
      break;
      }
    case 'Voters_timedOut0_455': {
      const v1647 = v1284[1];
      return;
      break;
      }
    case 'Voters_upvoted0_455': {
      const v1737 = v1284[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_downvote4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_downvote4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_downvote4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    Voters_contribute0_89: ctc7,
    Voters_downvote0_89: ctc6,
    Voters_upvote0_89: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v839, v847, v848, v855, v858, v859, v860, v867] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v887 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:98:17:application call to [unknown function] (defined at: ./index.rsh:98:17:function exp)', 'at ./index.rsh:91:27:application call to "runVoters_downvote0_89" (defined at: ./index.rsh:98:17:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)'],
    msg: 'in',
    who: 'Voters_downvote'
    });
  const v891 = ['Voters_downvote0_89', v887];
  
  const txn1 = await (ctc.sendrecv({
    args: [v839, v847, v848, v855, v858, v859, v860, v867, v891],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:98:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn1;
      
      switch (v914[0]) {
        case 'Voters_contribute0_89': {
          const v917 = v914[1];
          
          break;
          }
        case 'Voters_downvote0_89': {
          const v973 = v914[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_downvote"
            });
          ;
          const v1012 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:99:35:decimal', stdlib.UInt_max, '1'));
          const v1013 = await txn1.getOutput('Voters_downvote', 'v1012', ctc3, v1012);
          
          const v3232 = v1012;
          const v3233 = v859;
          const v3234 = v915;
          const v3236 = v867;
          const v3237 = stdlib.gt(v855, v860);
          if (v3237) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v839,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Voters_upvote0_89': {
          const v1029 = v914[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn1;
  switch (v914[0]) {
    case 'Voters_contribute0_89': {
      const v917 = v914[1];
      return;
      break;
      }
    case 'Voters_downvote0_89': {
      const v973 = v914[1];
      undefined /* setApiDetails */;
      ;
      const v1012 = stdlib.add(v858, stdlib.checkedBigNumberify('./index.rsh:99:35:decimal', stdlib.UInt_max, '1'));
      const v1013 = await txn1.getOutput('Voters_downvote', 'v1012', ctc3, v1012);
      if (v251) {
        stdlib.protect(ctc0, await interact.out(v973, v1013), {
          at: './index.rsh:98:18:application',
          fs: ['at ./index.rsh:98:18:application call to [unknown function] (defined at: ./index.rsh:98:18:function exp)', 'at ./index.rsh:99:23:application call to "notify" (defined at: ./index.rsh:98:44:function exp)', 'at ./index.rsh:98:44:application call to [unknown function] (defined at: ./index.rsh:98:44:function exp)'],
          msg: 'out',
          who: 'Voters_downvote'
          });
        }
      else {
        }
      
      const v3232 = v1012;
      const v3233 = v859;
      const v3234 = v915;
      const v3236 = v867;
      const v3237 = stdlib.gt(v855, v860);
      if (v3237) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Voters_upvote0_89': {
      const v1029 = v914[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_downvoted9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_downvoted9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_downvoted9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_455: ctc6,
    Voters_created0_455: ctc12,
    Voters_downvoted0_455: ctc6,
    Voters_projectDown0_455: ctc13,
    Voters_timedOut0_455: ctc6,
    Voters_upvoted0_455: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1226 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:178:17:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:154:41:application call to "runVoters_downvoted0_455" (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:154:41:application call to [unknown function] (defined at: ./index.rsh:154:41:function exp)'],
    msg: 'in',
    who: 'Voters_downvoted'
    });
  const v1236 = ['Voters_downvoted0_455', v1226];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1236],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:178:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
      
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_downvoted"
            });
          ;
          const v1511 = v1467[stdlib.checkedBigNumberify('./index.rsh:178:17:spread', stdlib.UInt_max, '0')];
          const v1512 = v1467[stdlib.checkedBigNumberify('./index.rsh:178:17:spread', stdlib.UInt_max, '1')];
          const v1513 = null;
          const v1514 = await txn1.getOutput('Voters_downvoted', 'v1513', ctc0, v1513);
          
          const v1521 = 'downvoted           ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
  switch (v1284[0]) {
    case 'Voters_contributed0_455': {
      const v1287 = v1284[1];
      return;
      break;
      }
    case 'Voters_created0_455': {
      const v1377 = v1284[1];
      return;
      break;
      }
    case 'Voters_downvoted0_455': {
      const v1467 = v1284[1];
      undefined /* setApiDetails */;
      ;
      const v1511 = v1467[stdlib.checkedBigNumberify('./index.rsh:178:17:spread', stdlib.UInt_max, '0')];
      const v1512 = v1467[stdlib.checkedBigNumberify('./index.rsh:178:17:spread', stdlib.UInt_max, '1')];
      const v1513 = null;
      const v1514 = await txn1.getOutput('Voters_downvoted', 'v1513', ctc0, v1513);
      if (v688) {
        stdlib.protect(ctc0, await interact.out(v1467, v1514), {
          at: './index.rsh:178:18:application',
          fs: ['at ./index.rsh:178:18:application call to [unknown function] (defined at: ./index.rsh:178:18:function exp)', 'at ./index.rsh:179:23:application call to "notify" (defined at: ./index.rsh:178:57:function exp)', 'at ./index.rsh:178:57:application call to [unknown function] (defined at: ./index.rsh:178:57:function exp)'],
          msg: 'out',
          who: 'Voters_downvoted'
          });
        }
      else {
        }
      
      const v1521 = 'downvoted           ';
      null;
      return;
      
      break;
      }
    case 'Voters_projectDown0_455': {
      const v1557 = v1284[1];
      return;
      break;
      }
    case 'Voters_timedOut0_455': {
      const v1647 = v1284[1];
      return;
      break;
      }
    case 'Voters_upvoted0_455': {
      const v1737 = v1284[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_projectDown9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_projectDown9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_projectDown9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Struct([['id', ctc3], ['title', ctc8], ['link', ctc9], ['description', ctc10], ['owner', ctc1], ['contractInfo', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_455: ctc7,
    Voters_created0_455: ctc13,
    Voters_downvoted0_455: ctc7,
    Voters_projectDown0_455: ctc6,
    Voters_timedOut0_455: ctc7,
    Voters_upvoted0_455: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1268 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:17:application call to [unknown function] (defined at: ./index.rsh:199:17:function exp)', 'at ./index.rsh:154:41:application call to "runVoters_projectDown0_455" (defined at: ./index.rsh:199:17:function exp)', 'at ./index.rsh:154:41:application call to [unknown function] (defined at: ./index.rsh:154:41:function exp)'],
    msg: 'in',
    who: 'Voters_projectDown'
    });
  const v1275 = ['Voters_projectDown0_455', v1268];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1275],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:199:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
      
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_projectDown"
            });
          ;
          const v1613 = v1557[stdlib.checkedBigNumberify('./index.rsh:199:17:spread', stdlib.UInt_max, '0')];
          const v1614 = null;
          const v1615 = await txn1.getOutput('Voters_projectDown', 'v1614', ctc0, v1614);
          
          const v1621 = 'projectDown         ';
          const v1622 = stdlib.checkedBigNumberify('./index.rsh:202:64:decimal', stdlib.UInt_max, '0');
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
  switch (v1284[0]) {
    case 'Voters_contributed0_455': {
      const v1287 = v1284[1];
      return;
      break;
      }
    case 'Voters_created0_455': {
      const v1377 = v1284[1];
      return;
      break;
      }
    case 'Voters_downvoted0_455': {
      const v1467 = v1284[1];
      return;
      break;
      }
    case 'Voters_projectDown0_455': {
      const v1557 = v1284[1];
      undefined /* setApiDetails */;
      ;
      const v1613 = v1557[stdlib.checkedBigNumberify('./index.rsh:199:17:spread', stdlib.UInt_max, '0')];
      const v1614 = null;
      const v1615 = await txn1.getOutput('Voters_projectDown', 'v1614', ctc0, v1614);
      if (v688) {
        stdlib.protect(ctc0, await interact.out(v1557, v1615), {
          at: './index.rsh:199:18:application',
          fs: ['at ./index.rsh:199:18:application call to [unknown function] (defined at: ./index.rsh:199:18:function exp)', 'at ./index.rsh:200:23:application call to "notify" (defined at: ./index.rsh:199:53:function exp)', 'at ./index.rsh:199:53:application call to [unknown function] (defined at: ./index.rsh:199:53:function exp)'],
          msg: 'out',
          who: 'Voters_projectDown'
          });
        }
      else {
        }
      
      const v1621 = 'projectDown         ';
      const v1622 = stdlib.checkedBigNumberify('./index.rsh:202:64:decimal', stdlib.UInt_max, '0');
      null;
      return;
      
      break;
      }
    case 'Voters_timedOut0_455': {
      const v1647 = v1284[1];
      return;
      break;
      }
    case 'Voters_upvoted0_455': {
      const v1737 = v1284[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_timedOut9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_timedOut9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_timedOut9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_455: ctc6,
    Voters_created0_455: ctc12,
    Voters_downvoted0_455: ctc6,
    Voters_projectDown0_455: ctc13,
    Voters_timedOut0_455: ctc6,
    Voters_upvoted0_455: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1254 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:192:17:application call to [unknown function] (defined at: ./index.rsh:192:17:function exp)', 'at ./index.rsh:154:41:application call to "runVoters_timedOut0_455" (defined at: ./index.rsh:192:17:function exp)', 'at ./index.rsh:154:41:application call to [unknown function] (defined at: ./index.rsh:154:41:function exp)'],
    msg: 'in',
    who: 'Voters_timedOut'
    });
  const v1264 = ['Voters_timedOut0_455', v1254];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1264],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:192:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
      
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_timedOut"
            });
          ;
          const v1714 = v1647[stdlib.checkedBigNumberify('./index.rsh:192:17:spread', stdlib.UInt_max, '0')];
          const v1715 = v1647[stdlib.checkedBigNumberify('./index.rsh:192:17:spread', stdlib.UInt_max, '1')];
          const v1716 = null;
          const v1717 = await txn1.getOutput('Voters_timedOut', 'v1716', ctc0, v1716);
          
          const v1724 = 'timedOut            ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
  switch (v1284[0]) {
    case 'Voters_contributed0_455': {
      const v1287 = v1284[1];
      return;
      break;
      }
    case 'Voters_created0_455': {
      const v1377 = v1284[1];
      return;
      break;
      }
    case 'Voters_downvoted0_455': {
      const v1467 = v1284[1];
      return;
      break;
      }
    case 'Voters_projectDown0_455': {
      const v1557 = v1284[1];
      return;
      break;
      }
    case 'Voters_timedOut0_455': {
      const v1647 = v1284[1];
      undefined /* setApiDetails */;
      ;
      const v1714 = v1647[stdlib.checkedBigNumberify('./index.rsh:192:17:spread', stdlib.UInt_max, '0')];
      const v1715 = v1647[stdlib.checkedBigNumberify('./index.rsh:192:17:spread', stdlib.UInt_max, '1')];
      const v1716 = null;
      const v1717 = await txn1.getOutput('Voters_timedOut', 'v1716', ctc0, v1716);
      if (v688) {
        stdlib.protect(ctc0, await interact.out(v1647, v1717), {
          at: './index.rsh:192:18:application',
          fs: ['at ./index.rsh:192:18:application call to [unknown function] (defined at: ./index.rsh:192:18:function exp)', 'at ./index.rsh:193:23:application call to "notify" (defined at: ./index.rsh:192:56:function exp)', 'at ./index.rsh:192:56:application call to [unknown function] (defined at: ./index.rsh:192:56:function exp)'],
          msg: 'out',
          who: 'Voters_timedOut'
          });
        }
      else {
        }
      
      const v1724 = 'timedOut            ';
      null;
      return;
      
      break;
      }
    case 'Voters_upvoted0_455': {
      const v1737 = v1284[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_upvote4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_upvote4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_upvote4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    Voters_contribute0_89: ctc7,
    Voters_downvote0_89: ctc6,
    Voters_upvote0_89: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v839, v847, v848, v855, v858, v859, v860, v867] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v879 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:94:17:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)', 'at ./index.rsh:91:27:application call to "runVoters_upvote0_89" (defined at: ./index.rsh:94:17:function exp)', 'at ./index.rsh:91:27:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)'],
    msg: 'in',
    who: 'Voters_upvote'
    });
  const v883 = ['Voters_upvote0_89', v879];
  
  const txn1 = await (ctc.sendrecv({
    args: [v839, v847, v848, v855, v858, v859, v860, v867, v883],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:94:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn1;
      
      switch (v914[0]) {
        case 'Voters_contribute0_89': {
          const v917 = v914[1];
          
          break;
          }
        case 'Voters_downvote0_89': {
          const v973 = v914[1];
          
          break;
          }
        case 'Voters_upvote0_89': {
          const v1029 = v914[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_upvote"
            });
          ;
          const v1077 = stdlib.add(v859, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
          const v1078 = await txn1.getOutput('Voters_upvote', 'v1077', ctc3, v1077);
          
          const v3298 = v858;
          const v3299 = v1077;
          const v3300 = v915;
          const v3302 = v867;
          const v3303 = stdlib.gt(v855, v860);
          if (v3303) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v839,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v914], secs: v916, time: v915, didSend: v251, from: v913 } = txn1;
  switch (v914[0]) {
    case 'Voters_contribute0_89': {
      const v917 = v914[1];
      return;
      break;
      }
    case 'Voters_downvote0_89': {
      const v973 = v914[1];
      return;
      break;
      }
    case 'Voters_upvote0_89': {
      const v1029 = v914[1];
      undefined /* setApiDetails */;
      ;
      const v1077 = stdlib.add(v859, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
      const v1078 = await txn1.getOutput('Voters_upvote', 'v1077', ctc3, v1077);
      if (v251) {
        stdlib.protect(ctc0, await interact.out(v1029, v1078), {
          at: './index.rsh:94:18:application',
          fs: ['at ./index.rsh:94:18:application call to [unknown function] (defined at: ./index.rsh:94:18:function exp)', 'at ./index.rsh:95:23:application call to "notify" (defined at: ./index.rsh:94:42:function exp)', 'at ./index.rsh:94:42:application call to [unknown function] (defined at: ./index.rsh:94:42:function exp)'],
          msg: 'out',
          who: 'Voters_upvote'
          });
        }
      else {
        }
      
      const v3298 = v858;
      const v3299 = v1077;
      const v3300 = v915;
      const v3302 = v867;
      const v3303 = stdlib.gt(v855, v860);
      if (v3303) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Voters_upvoted9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_upvoted9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_upvoted9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_455: ctc6,
    Voters_created0_455: ctc12,
    Voters_downvoted0_455: ctc6,
    Voters_projectDown0_455: ctc13,
    Voters_timedOut0_455: ctc6,
    Voters_upvoted0_455: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1212 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:171:17:application call to [unknown function] (defined at: ./index.rsh:171:17:function exp)', 'at ./index.rsh:154:41:application call to "runVoters_upvoted0_455" (defined at: ./index.rsh:171:17:function exp)', 'at ./index.rsh:154:41:application call to [unknown function] (defined at: ./index.rsh:154:41:function exp)'],
    msg: 'in',
    who: 'Voters_upvoted'
    });
  const v1222 = ['Voters_upvoted0_455', v1212];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1222],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:171:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
      
      switch (v1284[0]) {
        case 'Voters_contributed0_455': {
          const v1287 = v1284[1];
          
          break;
          }
        case 'Voters_created0_455': {
          const v1377 = v1284[1];
          
          break;
          }
        case 'Voters_downvoted0_455': {
          const v1467 = v1284[1];
          
          break;
          }
        case 'Voters_projectDown0_455': {
          const v1557 = v1284[1];
          
          break;
          }
        case 'Voters_timedOut0_455': {
          const v1647 = v1284[1];
          
          break;
          }
        case 'Voters_upvoted0_455': {
          const v1737 = v1284[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_upvoted"
            });
          ;
          const v1816 = v1737[stdlib.checkedBigNumberify('./index.rsh:171:17:spread', stdlib.UInt_max, '0')];
          const v1817 = v1737[stdlib.checkedBigNumberify('./index.rsh:171:17:spread', stdlib.UInt_max, '1')];
          const v1818 = null;
          const v1819 = await txn1.getOutput('Voters_upvoted', 'v1818', ctc0, v1818);
          
          const v1826 = 'upvoted             ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1284], secs: v1286, time: v1285, didSend: v688, from: v1283 } = txn1;
  switch (v1284[0]) {
    case 'Voters_contributed0_455': {
      const v1287 = v1284[1];
      return;
      break;
      }
    case 'Voters_created0_455': {
      const v1377 = v1284[1];
      return;
      break;
      }
    case 'Voters_downvoted0_455': {
      const v1467 = v1284[1];
      return;
      break;
      }
    case 'Voters_projectDown0_455': {
      const v1557 = v1284[1];
      return;
      break;
      }
    case 'Voters_timedOut0_455': {
      const v1647 = v1284[1];
      return;
      break;
      }
    case 'Voters_upvoted0_455': {
      const v1737 = v1284[1];
      undefined /* setApiDetails */;
      ;
      const v1816 = v1737[stdlib.checkedBigNumberify('./index.rsh:171:17:spread', stdlib.UInt_max, '0')];
      const v1817 = v1737[stdlib.checkedBigNumberify('./index.rsh:171:17:spread', stdlib.UInt_max, '1')];
      const v1818 = null;
      const v1819 = await txn1.getOutput('Voters_upvoted', 'v1818', ctc0, v1818);
      if (v688) {
        stdlib.protect(ctc0, await interact.out(v1737, v1819), {
          at: './index.rsh:171:18:application',
          fs: ['at ./index.rsh:171:18:application call to [unknown function] (defined at: ./index.rsh:171:18:function exp)', 'at ./index.rsh:172:23:application call to "notify" (defined at: ./index.rsh:171:55:function exp)', 'at ./index.rsh:171:55:application call to [unknown function] (defined at: ./index.rsh:171:55:function exp)'],
          msg: 'out',
          who: 'Voters_upvoted'
          });
        }
      else {
        }
      
      const v1826 = 'upvoted             ';
      null;
      return;
      
      break;
      }
    }
  
  
  };
export async function Voters_claimRefund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_claimRefund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_claimRefund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Voters_claimRefund6(ctcTop, interact);}
  };
export async function Voters_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Voters_contribute4(ctcTop, interact);}
  };
export async function Voters_contributed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_contributed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_contributed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Voters_contributed9(ctcTop, interact);}
  };
export async function Voters_created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Voters_created9(ctcTop, interact);}
  };
export async function Voters_downvote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_downvote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_downvote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Voters_downvote4(ctcTop, interact);}
  };
export async function Voters_downvoted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_downvoted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_downvoted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Voters_downvoted9(ctcTop, interact);}
  };
export async function Voters_projectDown(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_projectDown expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_projectDown expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Voters_projectDown9(ctcTop, interact);}
  };
export async function Voters_timedOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_timedOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_timedOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Voters_timedOut9(ctcTop, interact);}
  };
export async function Voters_upvote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_upvote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_upvote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Voters_upvote4(ctcTop, interact);}
  };
export async function Voters_upvoted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_upvoted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_upvoted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Voters_upvoted9(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Voters_claimRefund()byte`, `Voters_contribute(uint64)uint64`, `Voters_contributed(uint64,uint64)byte[0]`, `Voters_created((uint64,byte[25],byte[150],byte[180],address,uint64))byte[0]`, `Voters_downvote()uint64`, `Voters_downvoted(uint64,uint64)byte[0]`, `Voters_projectDown(uint64)byte[0]`, `Voters_timedOut(uint64,uint64)byte[0]`, `Voters_upvote()uint64`, `Voters_upvoted(uint64,uint64)byte[0]`],
    pure: [],
    sigs: [`Voters_claimRefund()byte`, `Voters_contribute(uint64)uint64`, `Voters_contributed(uint64,uint64)byte[0]`, `Voters_created((uint64,byte[25],byte[150],byte[180],address,uint64))byte[0]`, `Voters_downvote()uint64`, `Voters_downvoted(uint64,uint64)byte[0]`, `Voters_projectDown(uint64)byte[0]`, `Voters_timedOut(uint64,uint64)byte[0]`, `Voters_upvote()uint64`, `Voters_upvoted(uint64,uint64)byte[0]`]
    },
  appApproval: `BiAcAAEIBIMDBgMFAkBIUFhgaCvpmK/+BPyl3fUHn8WKywyn+8LTDIsD89DOlgbm/7DtAt+wmY4D1LDZ+wSl5deSAQkqJgUBAAABAQECGLUOO3Jkb3duAAAAAAAAAAAAAAAAAAAAACI1ADEYQQnIKWRJIls1ASRbNQIxGSMSQQAKMQAoIQ+vZkIJlTYaABdJQQENIjUEIzUGSSEQDEAAhUkhEQxAAE5JIRIMQAA3SSETDEAAGiETEkQ2GgE2GgJQNf+AAQU0/1AhBK9QQgD0IRISRDYaATX/gAEDNP9QIRSvUEIA3iEREkQ2GgE1/yg0/1BCBVBJIRUMQAARIRUSRCk1/yo0/1Akr1BCBTghEBJENhoBNhoCUDX/KzT/UCEEr1BCAJ5JIRYMQABISSEXDEAAOUkhGAxAABghGBJENhoBNhoCUDX/KDT/UCEEr1BCAHEhFxJENhoBNhoCUDX/gAEENP9QIQSvUEIAVyEWEkQpQgI1SSEZDEAAESEZEkQpNf8rNP9QJK9QQgS5geriuooBEkQ2GgE1/yo0/1BCACM2GgIXNQQ2GgM2GgEXSSUMQASESSEFDEADYUkkDEAB5SQSRCEaNAESRDQESSISTDQCEhFESTUFNf+ABHccNTQ0/1CwNP8iVUkhBgxAANNJJQxAAJBJIQcMQABGIQcSRDT/VwEQNf6ACAAAAAAAAAcasCk1B4AYUISrsHVwdm90ZWQAAAAAAAAAAAAAAAAANP5XAAhQNP5XCAhQsCMyBkIHkEg0/1cBEDX+gAgAAAAAAAAGtLApNQeAGFCEq7B0aW1lZE91dAAAAAAAAAAAAAAAADT+VwAIUDT+VwgIULAjMgZCB01INP9XAQg1/oAIAAAAAAAABk6wKTUHgBhQhKuwcHJvamVjdERvd24AAAAAAAAAAAA0/lAkr1CwIzIGQgcQSSMMQACbSSEIDEAAQ0g0/1cBEDX+gAgAAAAAAAAF6bApNQeAGFCEq7Bkb3dudm90ZWQAAAAAAAAAAAAAADT+VwAIUDT+VwgIULAjMgZCBsBINP8jgZMDWDX+NP41/YAIAAAAAAAABXmwKTUHgAQkfnm2NP1XAAhQNP1XCBlQNP1XIZZQNP1Xt7RQNP2B6wKBIFhQNP0hFCRYULAjMgZCBm9INP9XARA1/oAIAAAAAAAABRSwKTUHgBhQhKuwY29udHJpYnV0ZWQAAAAAAAAAAAA0/lcACFA0/lcICFCwIzIGQgYsIQUSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/VyAgNf4hCVs1/SEKWzX8IQtbNfshDFs1+iENWzX5IQ5bNfiBcFs190k1BTX2gATJ6I0MNPZQsDEAiAZQVyEJSTX0IlVAAAYiNfVCAAw09CNbSTXzNfVCAAAxAIgGLlcqAUk18yJVQAAGIjX0QgAGIzX0QgAANPc09Q809BBBAI0xAIgGB1cAIUk18iJVQAAHNP8180IADTTyVwEgSTXxNfNCAACxIrIBNPWyCCOyEDTzsgezMQAoMQCIBdAiIRtMVmaAGLUOO3JyZWZ1bmRQYXNzZWQAAAAAAAAAADT9FlCwgAkAAAAAAAAEfQGwKjUHNP80/jT9NPw0+zT6NPk09QkyBjT4NPc09QlCBJCAGLUOO3JyZWZ1bmRGYWlsZWQAAAAAAAAAADT9FlCwgAkAAAAAAAAEhgCwKDUHNP80/jT9NPw0+zT6NPkyBjT4NPdCBEslEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf9XICA1/iEJWzX9IQpbNfwhC1s1+yEMWzX6IQ1bNfkhDls1+IAEkSc087AyBjT8D0Q0/zEAEkQ0+zT6DUEABiI190IAETT6NPsSQQAGIjX3QgADIzX3NPcjEkEARoAYtQ47cnBhc3NlZAAAAAAAAAAAAAAAAAAANP0WULCxIrIBNPiyCCOyEDT+sgezNP80/jT9NPw0+zT6MgY0+TT4SQlCAyw0+CINQQA2gBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA0/RZQsDT/NP40/TT8NPs0+jT4MgY0+TT4QgNLJwQ0/RZQsDT/NP40/TT8NPs0+jIGNPk0+EIC00kjDEACaEkhBgxAAchIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/VyAgNf4hCVs1/SEKWzX8IQtbNfshDFs1+iENWzX5IQ5bNfhJNQU194AEkfGnmjT3ULAyBjT8DEQ09yJVSSMMQABqSSEIDEAAMyEIEkQ0+iMINfaACAAAAAAAAAQ1NPYWULA09hY1BzT/NP40/TT8NPs09jIGNPk0+EICK0g0+yMINfaACAAAAAAAAAP0NPYWULA09hY1BzT/NP40/TT8NPY0+jIGNPk0+EIB+0g091cBCDX2NPYXSTX1Ig1ENPg09Qg19DT1iAM4gAgAAAAAAAADpjT0FlCwNPQWNQcxAIgDEFcqAUk18iJVQAAGIjXzQgAGIzXzQgAANPNBAFYxAIgC71chCUk18SJVQAAGIjXyQgAMNPEjW0k18DXyQgAAMQAoMQCIAsoqNPI09QgWUDXxSVcAITTxUExXKgFQZjT/NP40/TT8NPs0+jIGNPk09EIBUzEAKDEAiAKWKjEAUDXyVyEKNPJMUGYxACgxAIgCgCo09RZQNfJJVwAhNPJQTFcqAVBmMQAoMQCIAmQjIRtMVmY0/zT+NP00/DT7NPoyBjT5NPRCAP4jEkQjNAESRDQESSISTDQCEhFEKGQqZFBJNQNJVwAgNf+B1AFbNf5JNQVJSklXABk1/VcZljX8V68gNfuBzwFbNfqB1wFbNfmABEbc1sI0/VA0/FA0+1A0+hZQNPkWULA0/zEAEkSABJ6C+wY0+hZQNP1QNPxQNANXILRQNPtQMRgWULA0/zT7NPo0/jT5CCIiMgY0/iJCAGVIgaCNBogBtyI0ARJENARJIhJMNAISEURJNQVJVwC0Nf9XtAEXNf6ABJ5Jq/Y0/1A0/hZRBwhQsDT+QQAiMQA0/1AyBhZQKEsBVwB/ZypLAVd/XWdIIzUBMgY1AkIA/yMyBkIAxzX/Nf41/TX8Nfs1+jX5Nfg19zT6NP4NQQAvNPc0+FA0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAHBnSCU1ATIGNQJCALCxIrIBNP+yCCOyEDT3sgezQgCBNf81/jX9Nfw1+zX6Nfk1+DX3NfY0/CINQQA0NPY091A0+BZQNPkWUDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB4Z0ghBTUBMgY1AkIATicENPgWULA09jT3NPg0+TT6NPs0/TT+NP9C/zk1/0k1/kEACyEaNQEyBjUCQgAfQgAAMRkhBxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEPr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 2,
  stateSize: 220,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes20",
                    "name": "elem5",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T3",
                "name": "v840",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v841",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes20",
                    "name": "elem5",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T3",
                "name": "v840",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v841",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes25",
                    "name": "elem0",
                    "type": "bytes25"
                  }
                ],
                "internalType": "struct T10",
                "name": "v845",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes22",
                    "name": "elem4",
                    "type": "bytes22"
                  }
                ],
                "internalType": "struct T11",
                "name": "v846",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v847",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v848",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v849",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Voters_contribute0_89",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_downvote0_89",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_upvote0_89",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T20",
                "name": "v914",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1124",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T34",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_contributed0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes25",
                                "name": "elem0",
                                "type": "bytes25"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T11",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T32",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_Voters_created0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_downvoted0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Voters_projectDown0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_timedOut0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_upvoted0_455",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T34",
                "name": "v1284",
                "type": "tuple"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1012",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1077",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1149",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1158",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1300",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1401",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1513",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1614",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1716",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1818",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v934",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes25",
            "name": "elem0",
            "type": "bytes25"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "create",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes25",
            "name": "elem0",
            "type": "bytes25"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes20",
            "name": "elem0",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "that",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Voters_claimRefund",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Voters_contribute",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_contributed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes25",
                "name": "elem0",
                "type": "bytes25"
              }
            ],
            "internalType": "struct T10",
            "name": "title",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes22",
                "name": "elem4",
                "type": "bytes22"
              }
            ],
            "internalType": "struct T11",
            "name": "link",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem5",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T3",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "contractInfo",
            "type": "address"
          }
        ],
        "internalType": "struct T32",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Voters_created",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Voters_downvote",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_downvoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Voters_projectDown",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_timedOut",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Voters_upvote",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_upvoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes25",
                    "name": "elem0",
                    "type": "bytes25"
                  }
                ],
                "internalType": "struct T10",
                "name": "v845",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes22",
                    "name": "elem4",
                    "type": "bytes22"
                  }
                ],
                "internalType": "struct T11",
                "name": "v846",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v847",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v848",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v849",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Voters_contribute0_89",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_downvote0_89",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_upvote0_89",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T20",
                "name": "v914",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1124",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T34",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_contributed0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes25",
                                "name": "elem0",
                                "type": "bytes25"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T11",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          }
                        ],
                        "internalType": "struct T32",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_Voters_created0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_downvoted0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Voters_projectDown0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_timedOut0_455",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T31",
                    "name": "_Voters_upvoted0_455",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T34",
                "name": "v1284",
                "type": "tuple"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003edb38038062003edb83398101604081905262000026916200038a565b60008055436003556040517fd810a3a9ebc6a081197c2d2e5e6f787dc808de45e539470739c188af7647390c906200006290339084906200045c565b60405180910390a1620000783415600762000165565b806020015160200151156200013757620000d860408051606080820183526000808352835160c08101855281815260208181018390529481018290529182018190526080820181905260a082015290918201908152602001600081525090565b33815260208083015151818301524360408084018290526001600081905591909155516200010991839101620004dc565b604051602081830303815290604052600290805190602001906200012f929190620001f3565b50506200015e565b6200014162000282565b602080820180516001905251439101526200015c816200018f565b505b506200058c565b816200018b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515115620001d85760096000908155436001556040805160208082018490528251808303820181529183019092528051620001d3926002920190620001f3565b505050565b60008080556001819055620001f090600290620002bb565b50565b82805462000201906200054f565b90600052602060002090601f01602090048101928262000225576000855562000270565b82601f106200024057805160ff191683800117855562000270565b8280016001018555821562000270579182015b828111156200027057825182559160200191906001019062000253565b506200027e929150620002f5565b5090565b6040518060400160405280600015158152602001620002b66040518060400160405280600015158152602001600081525090565b905290565b508054620002c9906200054f565b6000825580601f10620002da575050565b601f016020900490600052602060002090810190620001f091905b5b808211156200027e5760008155600101620002f6565b604080519081016001600160401b03811182821017156200033d57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200033d57634e487b7160e01b600052604160045260246000fd5b805180151581146200038557600080fd5b919050565b60008183036101008112156200039f57600080fd5b620003a96200030c565b83518152601f198201915060e0821215620003c357600080fd5b620003cd6200030c565b60c0831215620003dc57600080fd5b620003e662000343565b92506020850151835260408501516020840152606085015160408401526080850151606084015260a0850151608084015260c085015160018060601b0319811681146200043257600080fd5b60a08401528281526200044860e0860162000374565b602082810191909152820152949350505050565b60006101208201905060018060a01b0384168252825160208301526020830151620004c7604084018251805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b60208101511515610100840152509392505050565b81516001600160a01b031681526020808301516101008301916200053e90840182805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b50604083015160e083015292915050565b600181811c908216806200056457607f821691505b602082108114156200058657634e487b7160e01b600052602260045260246000fd5b50919050565b61393f806200059c6000396000f3fe6080604052600436106101225760003560e01c8063817d57f3116100a5578063a7661d541161006c578063a7661d541461027e578063ab53f2c614610291578063cadc2e7a146102b4578063d02f3fa9146102e1578063d1fc69c8146102f4578063e886badc1461030757005b8063817d57f31461020e578063832307571461023b5780638759128e14610250578063902ebedf14610258578063a594c1591461026b57005b80635bc4fb89116100e95780635bc4fb89146101ba5780636a959486146101cd5780636da017a0146101d557806377e51f4b146101e857806379f675ce146101fb57005b80631e93b0f11461012b578063245981431461014f5780633425537e146101725780633bc5b7bf1461017a578063430f9a2b146101a757005b3661012957005b005b34801561013757600080fd5b506003545b6040519081526020015b60405180910390f35b61016261015d366004612ae1565b61031a565b6040519015158152602001610146565b61013c610363565b34801561018657600080fd5b5061019a610195366004612b18565b610394565b6040516101469190612b62565b6101296101b5366004612b9a565b6103ab565b6101296101c8366004612bb3565b6103cf565b61013c6103ef565b6101296101e3366004612bd7565b61041f565b6101626101f6366004612ae1565b61043f565b610162610209366004612f1d565b610485565b34801561021a57600080fd5b5061022e610229366004612b18565b6104c0565b6040516101469190612f3a565b34801561024757600080fd5b5060015461013c565b6101626104d1565b610129610266366004612f6c565b6104fd565b610162610279366004612f7f565b61051d565b61012961028c366004612bd7565b610558565b34801561029d57600080fd5b506102a6610578565b604051610146929190612f98565b3480156102c057600080fd5b506102d46102cf366004612b18565b610615565b6040516101469190612ff5565b61013c6102ef366004612f7f565b610626565b610162610302366004612ae1565b610660565b610162610315366004612ae1565b6106aa565b60006103246124c9565b60208181018051516002905280515160609081015187905290515101510183905261034d6124e8565b61035782826106f3565b60a00151949350505050565b600061036d61253c565b6020810151516002905261037f6124e8565b6103898282610ca2565b610100015192915050565b61039c612556565b6103a5826112b4565b92915050565b6103b36124e8565b6103cb6103c5368490038401846130a0565b826106f3565b5050565b6103d76124e8565b6103cb6103e936849003840184613188565b82610ca2565b60006103f961253c565b6020810151516001905261040b6124e8565b6104158282610ca2565b6080015192915050565b6104276124e8565b6103cb61043936849003840184613228565b8261137b565b60006104496124c9565b60208181018051516000905280515182015186905251518101510183905261046f6124e8565b61047982826106f3565b60400151949350505050565b600061048f6124c9565b60208101805151600190525151604001518390526104ab6124e8565b6104b582826106f3565b606001519392505050565b6104c8612556565b6103a582611891565b60006104db612579565b6020810151600090526104ec6124e8565b6104f6828261137b565b5192915050565b6105056124e8565b6103cb61051736849003840184613282565b82611945565b60006105276124c9565b60208101805151600390525151608001518390526105436124e8565b61054d82826106f3565b60c001519392505050565b6105606124e8565b6103cb61057236849003840184613313565b82611b5c565b60006060600054600280805461058d9061334b565b80601f01602080910402602001604051908101604052809291908181526020018280546105b99061334b565b80156106065780601f106105db57610100808354040283529160200191610606565b820191906000526020600020905b8154815290600101906020018083116105e957829003601f168201915b50505050509050915091509091565b61061d612556565b6103a582611f93565b600061063061253c565b6020818101805151600090525151015183905261064b6124e8565b6106558282610ca2565b602001519392505050565b600061066a6124c9565b60208181018051516005905280515160c0908101518790529051510151018390526106936124e8565b61069d82826106f3565b6101200151949350505050565b60006106b46124c9565b60208181018051516004905280515160a0908101518790529051510151018390526106dd6124e8565b6106e782826106f3565b60e00151949350505050565b6107036009600054146021612041565b815161071e90158061071757508251600154145b6022612041565b6000808055600280546107309061334b565b80601f016020809104026020016040519081016040528092919081815260200182805461075c9061334b565b80156107a95780601f1061077e576101008083540402835291602001916107a9565b820191906000526020600020905b81548152906001019060200180831161078c57829003601f168201915b50505050508060200190518101906107c19190613380565b90506107cb6125a3565b7f16a180115fa0a92ee4c050ac1cd553eecf6c8197a76f618b9f8dd978b19d191733856040516107fc929190613423565b60405180910390a1600060208501515151600581111561081e5761081e612b3c565b14156108e557602080850151510151815261083b3415601b612041565b604051600081527f6d252729d407a663944a64ed9eba6f25ef14aa8015c7ffae2174cc9cffe77cc89060200160405180910390a16000604080850191909152602080830180516a18dbdb9d1c9a589d5d195960aa1b9052518351805192015192516000805160206138ca833981519152936108b69391613531565b60405180910390a16108c66126b5565b602080820180516001905251439101526108df81612066565b50610c9c565b60016020850151515160058111156108ff576108ff612b3c565b14156109b557602084015151604090810151908201526109213415601c612041565b604051600081527f6603c897c23b3fe6fea8cf0e07ffffe2ab3740b4503388e81d9de428d88bd2d99060200160405180910390a1600060608085019190915260408083015151805160208201518284015194830151608084015160a09094015194517f87e3eb2576ee6bbfbfda533430097181da21ef84f9f2c5cd1b5dfd4f4b8c586f966108b69694959394909391613552565b60026020850151515160058111156109cf576109cf612b3c565b1415610a6f57602084015151606090810151908201526109f13415601d612041565b604051600081527fb464c3da70538efa951b50f61cb47066c43919c021d3f3abf3d31f67224185239060200160405180910390a1600060a084015260808101805168191bdddb9d9bdd195960ba1b905251606082015180516020909101516040516000805160206138ca833981519152936108b69390929091613531565b6003602085015151516005811115610a8957610a89612b3c565b1415610b22576020840151516080015160a0820152610aaa3415601e612041565b604051600081527f92e925414d10deb32404d6ab84785e27ac27f8caecf42670b9b7930727b4cf1f9060200160405180910390a1600060c0808501829052820180516a383937b532b1ba2237bbb760a91b90525160a0830151516040516000805160206138ca833981519152936108b6939291613531565b6004602085015151516005811115610b3c57610b3c612b3c565b1415610bde5760208401515160a0015160e0820152610b5d3415601f612041565b604051600081527fc3180bbab2dabdc45c8ba789aa2a41727332aec33ef5868d18fb70797761010e9060200160405180910390a1600060e08085019190915261010082018051671d1a5b595913dd5d60c21b9052519082015180516020909101516040516000805160206138ca833981519152936108b69390929091613531565b6005602085015151516005811115610bf857610bf8612b3c565b1415610c9c576020808501515160c00151610120830152610c1b90341590612041565b604051600081527f18c0bd65dcd84f4f65ba7678c113f140a0f9188213116eb5de0a1118084147429060200160405180910390a160006101208085019190915261014082018051661d5c1d9bdd195960ca1b9052519082015180516020909101516040516000805160206138ca833981519152936108b69390929091613531565b50505050565b610cb26004600054146010612041565b8151610ccd901580610cc657508251600154145b6011612041565b600080805560028054610cdf9061334b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0b9061334b565b8015610d585780601f10610d2d57610100808354040283529160200191610d58565b820191906000526020600020905b815481529060010190602001808311610d3b57829003601f168201915b5050505050806020019051810190610d7091906135b7565b9050610dbe604080516101008101909152600060e082019081528190815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081525090565b610dcf826060015143106012612041565b7fdd7466f900de4f47c6643f109aa37456eaed0fc6ef7ca57aa8d57ee9fff49cf13385604051610e00929190613668565b60405180910390a16000602085015151516002811115610e2257610e22612b3c565b14156110a85760208085015151015180825251610e42901515600c612041565b80515160e0830151610e5491906136e3565b6020820152805151610e69903414600d612041565b7fc2d5d4e724ac40df8ffe299d272d0854ee8e2c5b20b6d22ac580710c5a35480a8160200151604051610e9e91815260200190565b60405180910390a1602080820151908401526000610ebb33611891565b516001811115610ecd57610ecd612b3c565b1415610edf5760006040820152610f0a565b6001610eea33611891565b516001811115610efc57610efc612b3c565b1415610f0a57600160408201525b806040015115611042576000610f1f33611f93565b516001811115610f3157610f31612b3c565b1415610f435760006060820152610f80565b6001610f4e33611f93565b516001811115610f6057610f60612b3c565b1415610f8057610f6f33611f93565b604001516080820181905260608201525b336000908152600560205260409020805460ff191660011790558051516060820151610fac91906136e3565b33600090815260056020526040902060010155610fc76126e8565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015184860180519190915260a0880151815186015280514394019390935260c0870151835190920191909152918401519051909101526108df816120cb565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560058252808320805460ff1916851781558551519085015560069091529020805462ff00ff19169091179055610fc76126e8565b60016020850151515160028111156110c2576110c2612b3c565b14156111ad576110d43415600e612041565b600182608001516110e591906136e3565b60a082018190526040519081527fc0c9ad1aaeb5638a08e2f2aec2a5c2a1fa41666ce9de97094f023071051c88829060200160405180910390a160a081015160808401526111316126e8565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260a0808601518486018051919091529087015181519094019390935282514392019190915260c085015182519091015260e08401519051608001526108df816120cb565b60026020850151515160028111156111c7576111c7612b3c565b1415610c9c576111d93415600f612041565b60018260a001516111ea91906136e3565b60c082018190526040519081527f993bf7c1745888b852bab85654acab246a9891cc272cc0867203468ef9620aae9060200160405180910390a160c08101516101008401526112376126e8565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015184860180519190915260c0808801518251909601959095528051439401939093529286015182519091015260e08501519051909101526108df816120cb565b6112bc612556565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156112eb576112eb612b3c565b141561136b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561132c5761132c612b3c565b600181111561133d5761133d612b3c565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b61138b6006600054146019612041565b81516113a690158061139f57508251600154145b601a612041565b6000808055600280546113b89061334b565b80601f01602080910402602001604051908101604052809291908181526020018280546113e49061334b565b80156114315780601f1061140657610100808354040283529160200191611431565b820191906000526020600020905b81548152906001019060200180831161141457829003601f168201915b505050505080602001905181019061144991906136fb565b905061145361274a565b6040805133815285516020808301919091528601515115158183015290517f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe9181900360600190a16114a734156018612041565b60006114b233611f93565b5160018111156114c4576114c4612b3c565b14156114d3576000815261150d565b60016114de33611f93565b5160018111156114f0576114f0612b3c565b141561150d576114ff33611f93565b604001516020820181905281525b600061151833611891565b51600181111561152a5761152a612b3c565b141561153c5760006040820152611567565b600161154733611891565b51600181111561155957611559612b3c565b141561156757600160408201525b8051610100830151101561157c576000611582565b80604001515b1561177e576000611592336112b4565b5160018111156115a4576115a4612b3c565b14156115bf5781516001600160a01b03166060820152611605565b60016115ca336112b4565b5160018111156115dc576115dc612b3c565b1415611605576115eb336112b4565b604001516001600160a01b03166080820181905260608201525b606081015181516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611642573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff1916905560a0820180516b1c99599d5b9914185cdcd95960a21b9052518382015191516000805160206138ea833981519152926116979291613784565b60405180910390a1604051600181527f807b1a21f9e5a1722d0467c3c78df82f2a026fc69ef0889e84a2018bc21c659c9060200160405180910390a1600183526116df61278a565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a080840151825190910152815160c084015161173e919061379d565b602080830180519290925281514391015260e0840151905160400152815161010084015161176c919061379d565b6020820151606001526108df8161226f565b60c0810180516b1c99599d5b9911985a5b195960a21b90525160408084015190516000805160206138ea833981519152926117ba929091613784565b60405180910390a1604051600081527f78ba163c68a9fb8cec5527f79d1d2c717b4550a27d560ef2ffc7b632914727359060200160405180910390a16000835261180261278a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08087015185519091015260c086015183850180519190915280514394019390935260e08601518351909201919091526101008501519151015261188a8161226f565b5050505050565b611899612556565b60016001600160a01b03831660009081526006602052604090205460ff1660018111156118c8576118c8612b3c565b141561136b576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561190957611909612b3c565b600181111561191a5761191a612b3c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b611955600160005414600a612041565b815161197090158061196957508251600154145b600b612041565b6000808055600280546119829061334b565b80601f01602080910402602001604051908101604052809291908181526020018280546119ae9061334b565b80156119fb5780601f106119d0576101008083540402835291602001916119fb565b820191906000526020600020905b8154815290600101906020018083116119de57829003601f168201915b5050505050806020019051810190611a1391906137b4565b90507f7bed4e0eb8ba37dad18b69ea434cb4952487bc903f6de70a0ddae4626eceb7d03384604051611a46929190613855565b60405180910390a1611a5a34156008612041565b8051611a72906001600160a01b031633146009612041565b60208084015160608101518151828401519385015160409384015193517fbdd1a003c77ac5900cab0a2b5f54d52e1bf9f485ad38816fe5194228e8805a3f95611abf959092913090613552565b60405180910390a1611acf6126e8565b815181516001600160a01b03918216905260208086018051604090810151855194169390920192909252815160600151835182015290516080015190830151611b1891906136e3565b8151606090810191909152602080830180516000908190528151909201829052805143604091820152850151815190930192909252905160800152610c9c816120cb565b611b6c6004600054146015612041565b8151611b87901580611b8057508251600154145b6016612041565b600080805560028054611b999061334b565b80601f0160208091040260200160405190810160405280929190818152602001828054611bc59061334b565b8015611c125780601f10611be757610100808354040283529160200191611c12565b820191906000526020600020905b815481529060010190602001808311611bf557829003601f168201915b5050505050806020019051810190611c2a91906135b7565b9050611c346127f4565b611c4682606001514310156017612041565b60408051338152855160208083019190915286015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1611c9934156013612041565b8151611cb1906001600160a01b031633146014612041565b8160a0015182608001511115611cca5760008152611ce8565b81608001518260a001511415611ce35760008152611ce8565b600181525b805160011415611e0157602081018051651c185cdcd95960d21b90525160408084015190516000805160206138ea83398151915292611d28929091613784565b60405180910390a181602001516001600160a01b03166108fc8360e001519081150290604051600060405180830381858888f19350505050158015611d71573d6000803e3d6000fd5b50611d7a6126e8565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518451820152608086015183850180519190915260a087015181519094019390935282514392019190915260c08501519151015260e0830151611def908061379d565b6020820151608001526108df816120cb565b60e082015115611ed457604080820180516519985a5b195960d21b9052518382015191516000805160206138ea83398151915292611e3f9291613784565b60405180910390a1611e4f61278a565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08087015185519091015260e08601805184860180519190915280514395019490945260c08701518451909301929092529051915101526108df8161226f565b606081018051633237bbb760e11b90525160408084015190516000805160206138ea83398151915292611f08929091613784565b60405180910390a1611f186126e8565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015184860180519190915260a088015181519095019490945283514393019290925260c086015183519091015260e08501519151015261188a816120cb565b611f9b612556565b60016001600160a01b03831660009081526005602052604090205460ff166001811115611fca57611fca612b3c565b141561136b576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561200b5761200b612b3c565b600181111561201c5761201c612b3c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b816103cb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156120b25760096000908155436001556040805160208101839052015b604051602081830303815290604052600290805190602001906120ad929190612845565b505050565b600080805560018190556120c8906002906128c9565b50565b80602001516060015181600001516060015111156122165761213d60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015190840152818401805151608080860191909152815184015160a0860152815183015160c08601529051015160e0840152600460005543600155516120899183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612258573d6000803e3d6000fd5b50600080805560018190556120c8906002906128c9565b604080518082019091526000602082019081528152602082015151156123ff576122f060405180610120016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015181850152855160809081015190850152855160a0908101519085015282860180515160c0860152805184015160e0860152510151610100840152600660005543600155516123db9183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610c9c929190612845565b8051633237bbb760e11b90528051825160409081015190516000805160206138ea83398151915292612432929091613784565b60405180910390a16124426126e8565b82515181516001600160a01b0391821690528351602090810151835192169181019190915283516040908101518351820152845160609081015184518201528551608090810151848601805191909152875160a00151815186015284880180519095015181518501528451909301518351830152925101519051909101526120ad816120cb565b6040518060400160405280600081526020016124e3612903565b905290565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b6040518060400160405280600081526020016124e3612916565b60408051606081019091528060005b815260006020820181905260409091015290565b6040518060400160405280600081526020016124e360405180602001604052806000151581525090565b604080516101a0810182526000610160820181815261018083018290528252825160208082018552918152908201529081016125dd612929565b81526020016125ff604051806040016040528060008152602001600081525090565b815260408051602081810190925260008152910190815260200161262f6040518060200160405280600081525090565b8152604080516020818101909252600081529101908152602001612666604051806040016040528060008152602001600081525090565b815260408051602081810190925260008152910190815260200161269d604051806040016040528060008152602001600081525090565b81526040805160208181019092526000815291015290565b60405180604001604052806000151581526020016124e36040518060400160405280600015158152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016124e36040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040805160e081018252600080825260208083018290528284018290526060830182905260808301829052835190810190935282529060a082019061269d565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290819081526020016124e36040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180608001604052806000815260200161282b604051806020016040528060006bffffffffffffffffffffffff191681525090565b81526040805160208181019092526000815291019061269d565b8280546128519061334b565b90600052602060002090601f01602090048101928261287357600085556128b9565b82601f1061288c57805160ff19168380011785556128b9565b828001600101855582156128b9579182015b828111156128b957825182559160200191906001019061289e565b506128c592915061293c565b5090565b5080546128d59061334b565b6000825580601f106128e5575050565b601f0160209004906000526020600020908101906120c8919061293c565b60405180602001604052806124e3612951565b60405180602001604052806124e3612a0f565b60405180602001604052806124e3612a38565b5b808211156128c5576000815560010161293d565b6040805160e081019091528060008152602001612981604051806040016040528060008152602001600081525090565b815260200161298e612929565b81526020016129b0604051806040016040528060008152602001600081525090565b81526020016129cb6040518060200160405280600081525090565b81526020016129ed604051806040016040528060008152602001600081525090565b81526020016124e3604051806040016040528060008152602001600081525090565b604080516080810190915280600081526020016125656040518060200160405280600081525090565b6040518060c0016040528060008152602001612a6a6040518060200160405280600066ffffffffffffff191681525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a0820152910190815260006020820181905260409091015290565b60008060408385031215612af457600080fd5b50508035926020909101359150565b6001600160a01b03811681146120c857600080fd5b600060208284031215612b2a57600080fd5b8135612b3581612b03565b9392505050565b634e487b7160e01b600052602160045260246000fd5b600281106120c8576120c8612b3c565b81516060820190612b7281612b52565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b60006103408284031215612bad57600080fd5b50919050565b600060a08284031215612bad57600080fd5b600060408284031215612bad57600080fd5b600060408284031215612be957600080fd5b612b358383612bc5565b6040516020810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715612c2457634e487b7160e01b600052604160045260246000fd5b600060208284031215612d9457600080fd5b612d9c612bf3565b9050813566ffffffffffffff1981168114612db657600080fd5b815292915050565b600060a08284031215612dd057600080fd5b612dd8612c2a565b905081358152602082013560208201526040820135604082015260608201356060820152608082013569ffffffffffffffffffff1981168114612e1a57600080fd5b608082015292915050565b6001600160601b0319811681146120c857600080fd5b803561137681612b03565b60008183036101e0811215612e5a57600080fd5b612e62612c5b565b915082358252612e758460208501612d82565b6020830152612e878460408501612dbe565b604083015260c060df1982011215612e9e57600080fd5b50612ea7612c5b565b60e083013581526101008301356020820152610120830135604082015261014083013560608201526101608301356080820152610180830135612ee981612e25565b60a08201526060820152612f006101a08301612e3b565b6080820152612f126101c08301612e3b565b60a082015292915050565b60006101e08284031215612f3057600080fd5b612b358383612e46565b81516060820190612f4a81612b52565b8083525060208301511515602083015260408301511515604083015292915050565b60006101408284031215612bad57600080fd5b600060208284031215612f9157600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015612fcc57858101830151858201606001528201612fb0565b81811115612fde576000606083870101525b50601f01601f191692909201606001949350505050565b8151606082019061300581612b52565b808352506020830151151560208301526040830151604083015292915050565b60006040828403121561303757600080fd5b61303f612c8c565b9050813581526020820135602082015292915050565b60006101e0828403121561306857600080fd5b613070612bf3565b9050612db68383612e46565b60006020828403121561308e57600080fd5b613096612bf3565b9135825250919050565b60008183036103408112156130b457600080fd5b6130bc612c8c565b83358152610320601f19830112156130d357600080fd5b6130db612bf3565b91506130e5612cbd565b6020850135600681106130f757600080fd5b81526131068660408701613025565b60208201526131188660808701613055565b604082015261312b866102608701613025565b606082015261313e866102a0870161307c565b6080820152613151866102c08701613025565b60a0820152613164866103008701613025565b60c0820152825260208101919091529392505050565b80151581146120c857600080fd5b600081830360a081121561319b57600080fd5b6131a3612c8c565b833581526080601f19830112156131b957600080fd5b6131c1612bf3565b91506131cb612cee565b6020850135600381106131dd57600080fd5b81526131ec866040870161307c565b602082015260608501356131ff8161317a565b604082015260808501356132128161317a565b6060820152825260208101919091529392505050565b6000818303604081121561323b57600080fd5b613243612c8c565b833581526020601f198301121561325957600080fd5b613261612bf3565b915060208401356132718161317a565b825260208101919091529392505050565b600081830361014081121561329657600080fd5b61329e612c8c565b8335815261012080601f19840112156132b657600080fd5b6132be612c2a565b92506132cd8660208701612d82565b83526132dc8660408701612dbe565b602084015260e08501356132ef81612b03565b60408401526101008501356060840152909301356080820152602083015250919050565b60006040828403121561332557600080fd5b61332d612c8c565b82358152602083013561333f8161317a565b60208201529392505050565b600181811c9082168061335f57607f821691505b60208210811415612bad57634e487b7160e01b600052602260045260246000fd5b60006020828403121561339257600080fd5b8151612b358161317a565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526bffffffffffffffffffffffff1960a08201511660a08301525050565b6001600160a01b038381168252825160208084019190915283015151805161036084019291906006811061345957613459612b3c565b60408501526020818101518051606087015290810151608086015250604081015151805160a086015266ffffffffffffff196020820151511660c086015260408101516134a960e087018261339d565b5060608101516134bd6101808701826133da565b50608081810151841661024087015260a091820151909316610260860152606082015180516102808701526020908101516102a087015292820151516102c086015281015180516102e086015282015161030085015260c00151805161032085015201516103409092019190915292915050565b92516001600160601b03191683526020830191909152604082015260600190565b868152855166ffffffffffffff191660208201526101e08101613578604083018761339d565b61358560e08301866133da565b6001600160a01b039384166101a0830152919092166101c090920191909152949350505050565b805161137681612b03565b60006101008083850312156135cb57600080fd5b6040519081019067ffffffffffffffff821181831017156135fc57634e487b7160e01b600052604160045260246000fd5b816040528351915061360d82612b03565b81815261361c602085016135ac565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152815160208083019190915282015151805160c0830191906003811061369b5761369b612b3c565b8060408501525060208101515160608401526040810151151560808401526060810151151560a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156136f6576136f66136cd565b500190565b6000610120828403121561370e57600080fd5b613716612d1f565b61371f836135ac565b815261372d602084016135ac565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b91516001600160601b0319168252602082015260400190565b6000828210156137af576137af6136cd565b500390565b60008183036101008112156137c857600080fd5b6137d0612d51565b83516137db81612b03565b815260c0601f19830112156137ef57600080fd5b6137f7612c5b565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a0840151608083015260c084015161383681612e25565b60a0830152602081019190915260e09290920151604083015250919050565b6001600160a01b03838116825282516020808401919091528084015180515166ffffffffffffff1916604085015290810151610160840192919061389c606086018261339d565b5081604082015116610100850152606081015161012085015260808101516101408501525050939250505056fef1c884060460d66449d26e57f74ff1de85244f27bfe31062e8bb08f3f3404cf38e286a9dd4559bb22bf9edddae9f75da581096298fc82a9ac0d63ec73f8c4c4da2646970667358221220da9c95d8c89595ba50fdd7d9333cf1b3cc85d1c06b44abf4ce54c7020853870b64736f6c634300080c0033`,
  BytecodeLen: 16091,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:79:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:206:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:91:27:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:128:62:after expr stmt semicolon',
    fs: ['at ./index.rsh:118:42:application call to [unknown function] (defined at: ./index.rsh:118:42:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:206:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:154:41:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Voters_claimRefund": Voters_claimRefund,
  "Voters_contribute": Voters_contribute,
  "Voters_contributed": Voters_contributed,
  "Voters_created": Voters_created,
  "Voters_downvote": Voters_downvote,
  "Voters_downvoted": Voters_downvoted,
  "Voters_projectDown": Voters_projectDown,
  "Voters_timedOut": Voters_timedOut,
  "Voters_upvote": Voters_upvote,
  "Voters_upvoted": Voters_upvoted
  };
export const _APIs = {
  Voters: {
    claimRefund: Voters_claimRefund,
    contribute: Voters_contribute,
    contributed: Voters_contributed,
    created: Voters_created,
    downvote: Voters_downvote,
    downvoted: Voters_downvoted,
    projectDown: Voters_projectDown,
    timedOut: Voters_timedOut,
    upvote: Voters_upvote,
    upvoted: Voters_upvoted
    }
  };
