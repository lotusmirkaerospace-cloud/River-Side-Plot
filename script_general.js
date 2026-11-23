(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.Container_07D6D65E_08A6_EE86_4196_5E2389547547"],"scripts":{"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setValue":TDV.Tour.Script.setValue,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"openLink":TDV.Tour.Script.openLink,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizStart":TDV.Tour.Script.quizStart,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"clone":TDV.Tour.Script.clone,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"registerKey":TDV.Tour.Script.registerKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPixels":TDV.Tour.Script.getPixels,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"disableVR":TDV.Tour.Script.disableVR,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupImage":TDV.Tour.Script.showPopupImage,"showWindow":TDV.Tour.Script.showWindow,"getKey":TDV.Tour.Script.getKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"textToSpeech":TDV.Tour.Script.textToSpeech,"enableVR":TDV.Tour.Script.enableVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"init":TDV.Tour.Script.init,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeJS":TDV.Tour.Script.executeJS,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initQuiz":TDV.Tour.Script.initQuiz,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"downloadFile":TDV.Tour.Script.downloadFile,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"createTween":TDV.Tour.Script.createTween,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"historyGoForward":TDV.Tour.Script.historyGoForward,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMapLocation":TDV.Tour.Script.setMapLocation,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cloneBindings":TDV.Tour.Script.cloneBindings,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"translate":TDV.Tour.Script.translate,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setLocale":TDV.Tour.Script.setLocale,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour},"layout":"absolute","id":"rootPlayer","defaultMenu":["fullscreen","mute","rotation"],"data":{"displayTooltipInTouchScreens":true,"defaultLocale":"en","history":{},"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"rate":1,"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false},"name":"Player740"},"backgroundColor":["#FFFFFF"],"minHeight":0,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0429CFF8_08A2_7D8A_4184_80F5EFD493D0_mobile_playlist])","minWidth":0,"hash": "ed94d93a79ff14094b7311e6b50c834987525223e78f63fc33202f7c421966ae", "definitions": [{"toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","subtitlesFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipTextShadowColor":"#000000","playbackBarBorderSize":0,"data":{"name":"Main Viewer"},"progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"propagateClick":false,"progressBorderSize":0,"progressBarBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","playbackBarRight":0,"subtitlesGap":0,"subtitlesTop":0,"toolTipPaddingBottom":4,"playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"id":"MainViewer","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","progressOpacity":0.7,"subtitlesTextShadowColor":"#000000","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"minWidth":100,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipPaddingLeft":6,"playbackBarHeadHeight":15,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"width":"100%","playbackBarHeadShadow":true,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000","playbackBarBorderRadius":0,"firstTransitionDuration":0,"toolTipPaddingRight":6,"playbackBarProgressBorderColor":"#000000","height":"100%","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","toolTipFontFamily":"Arial"},{"hfovMax":130,"vfov":180,"data":{"label":"Pano 2"},"id":"panorama_024B1908_08A1_A28A_419E_C61429296C91","hfov":360,"class":"Panorama","label":trans('panorama_024B1908_08A1_A28A_419E_C61429296C91.label'),"thumbnailUrl":"media/panorama_024B1908_08A1_A28A_419E_C61429296C91_t.webp","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_024B1908_08A1_A28A_419E_C61429296C91_t.webp","cube":{"class":"ImageResource","levels":[{"colCount":24,"height":4096,"url":"media/panorama_024B1908_08A1_A28A_419E_C61429296C91_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","width":24576},{"colCount":12,"height":2048,"url":"media/panorama_024B1908_08A1_A28A_419E_C61429296C91_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_024B1908_08A1_A28A_419E_C61429296C91_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}]},{"hfovMax":130,"vfov":180,"data":{"label":"Pano 3"},"id":"panorama_02458980_08A2_627A_4198_3407F4177504","hfov":360,"class":"Panorama","label":trans('panorama_02458980_08A2_627A_4198_3407F4177504.label'),"thumbnailUrl":"media/panorama_02458980_08A2_627A_4198_3407F4177504_t.webp","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_02458980_08A2_627A_4198_3407F4177504_t.webp","cube":{"class":"ImageResource","levels":[{"colCount":24,"height":4096,"url":"media/panorama_02458980_08A2_627A_4198_3407F4177504_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","width":24576},{"colCount":12,"height":2048,"url":"media/panorama_02458980_08A2_627A_4198_3407F4177504_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_02458980_08A2_627A_4198_3407F4177504_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}]},{"mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"layout":"vertical","id":"Container_07D6D65E_08A6_EE86_4196_5E2389547547","left":"0%","verticalAlign":"middle","minHeight":20,"data":{"name":"Container"},"minWidth":20,"scrollBarMargin":2,"gap":10,"top":"0%","overflow":"scroll","width":"6.256%","propagateClick":false,"height":"98.5%","children":["this.ThumbnailList_0429CFF8_08A2_7D8A_4184_80F5EFD493D0"],"backgroundOpacity":0,"class":"Container","scrollBarColor":"#000000"},{"id":"ThumbnailList_0429CFF8_08A2_7D8A_4184_80F5EFD493D0_mobile_playlist","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_04EA209A_08A1_A38E_4199_84AE93528490_camera","media":"this.panorama_04EA209A_08A1_A38E_4199_84AE93528490","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_024B1908_08A1_A28A_419E_C61429296C91_camera","media":"this.panorama_024B1908_08A1_A28A_419E_C61429296C91","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_02458980_08A2_627A_4198_3407F4177504_camera","media":"this.panorama_02458980_08A2_627A_4198_3407F4177504","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_04EA209A_08A1_A38E_4199_84AE93528490","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_04EA209A_08A1_A38E_4199_84AE93528490_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_024B1908_08A1_A28A_419E_C61429296C91","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_024B1908_08A1_A28A_419E_C61429296C91_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_02458980_08A2_627A_4198_3407F4177504","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_02458980_08A2_627A_4198_3407F4177504_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"hfovMax":130,"vfov":180,"data":{"label":"Pano 1"},"id":"panorama_04EA209A_08A1_A38E_4199_84AE93528490","hfov":360,"class":"Panorama","label":trans('panorama_04EA209A_08A1_A38E_4199_84AE93528490.label'),"thumbnailUrl":"media/panorama_04EA209A_08A1_A38E_4199_84AE93528490_t.webp","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_04EA209A_08A1_A38E_4199_84AE93528490_t.webp","cube":{"class":"ImageResource","levels":[{"colCount":24,"height":4096,"url":"media/panorama_04EA209A_08A1_A38E_4199_84AE93528490_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","width":24576},{"colCount":12,"height":2048,"url":"media/panorama_04EA209A_08A1_A38E_4199_84AE93528490_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_04EA209A_08A1_A38E_4199_84AE93528490_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}]},{"scrollBarColor":"#FFFFFF","itemBorderRadius":0,"itemThumbnailShadowBlurRadius":8,"paddingTop":10,"paddingBottom":10,"itemBackgroundColorDirection":"vertical","borderRadius":5,"toolTipBorderColor":"#767676","data":{"name":"ThumbnailList35762"},"selectedItemLabelFontWeight":"bold","toolTipTextShadowColor":"#000000","itemBackgroundColorRatios":[],"gap":10,"rollOverItemLabelFontWeight":"normal","toolTipShadowColor":"#333333","itemLabelFontStyle":"normal","itemThumbnailScaleMode":"fit_outside","propagateClick":false,"itemThumbnailOpacity":1,"paddingLeft":20,"itemLabelGap":9,"paddingRight":20,"itemThumbnailShadowColor":"#000000","itemThumbnailBorderRadius":50,"itemPaddingLeft":3,"toolTipFontColor":"#606060","rollOverItemBackgroundOpacity":0,"itemBackgroundColor":[],"toolTipPaddingBottom":4,"itemPaddingBottom":3,"playList":"this.ThumbnailList_0429CFF8_08A2_7D8A_4184_80F5EFD493D0_mobile_playlist","layout":"vertical","id":"ThumbnailList_0429CFF8_08A2_7D8A_4184_80F5EFD493D0","itemThumbnailWidth":75,"itemThumbnailHeight":75,"itemThumbnailShadowSpread":1,"itemPaddingRight":3,"itemThumbnailShadow":true,"minHeight":20,"itemThumbnailShadowOpacity":0.54,"minWidth":20,"itemLabelFontFamily":"Arial","itemLabelFontSize":14,"toolTipPaddingLeft":6,"scrollBarMargin":2,"toolTipBackgroundColor":"#F6F6F6","itemBackgroundOpacity":0,"tabIndex":0,"selectedItemLabelFontColor":"#FFCC00","itemPaddingTop":3,"itemLabelFontWeight":"normal","width":131,"toolTipPaddingTop":4,"height":"32.532%","itemLabelFontColor":"#FFFFFF","class":"ThumbnailList","toolTipPaddingRight":6,"backgroundOpacity":0,"toolTipFontFamily":"Arial","itemLabelTextDecoration":"none"},{"class":"PanoramaCamera","id":"panorama_024B1908_08A1_A28A_419E_C61429296C91_camera","initialSequence":"this.sequence_03A1A1C9_08A2_658D_415B_F7651B728E16","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"class":"PanoramaCamera","id":"panorama_02458980_08A2_627A_4198_3407F4177504_camera","initialSequence":"this.sequence_03A1E1C9_08A2_658D_419F_884E221CA2B7","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"class":"PanoramaCamera","id":"panorama_04EA209A_08A1_A38E_4199_84AE93528490_camera","initialSequence":"this.sequence_03A221C8_08A2_658B_4180_52BD633EA9BC","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"class":"PanoramaCameraSequence","id":"sequence_03A1A1C9_08A2_658D_415B_F7651B728E16","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_03A1E1C9_08A2_658D_419F_884E221CA2B7","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"class":"PanoramaCameraSequence","id":"sequence_03A221C8_08A2_658B_4180_52BD633EA9BC","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]}],"backgroundColorRatios":[0],"gap":10,"scrollBarMargin":2,"width":"100%","propagateClick":false,"height":"100%","class":"Player","watermark":false,"scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.36, Mon Nov 23 2026
//