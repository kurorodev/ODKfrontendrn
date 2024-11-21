import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonInvert from '../components/ButtonInvert';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';


const spravkaBody = [
  {id: '2ndfl', title:"2-НДФЛ", body:"Справка 2-НДФЛ — это форма справки, содержащей в себе информацию о доходах, суммах предоставленных вычетовтов и уплаченных налогах гражданина. Аббревиатура НДФЛ расшифровывается как «аналог на доходы физ.лиц».Такой документ отражает информацию о том, сколько денег заработал человек за определенный промежуток времени и сколько обязательных налогов со своего дохода он заплатил. Для конечных пользователей справка информирует о материальном положении человека, отражаает ежемесячную сумму заработка"},
  {id: 'stdr', title:"Справка с места работы", body:"1. ФИО сотрудника и должность, которую он занимал в компании;\n2. Сроки трудоустройства (дата приёма на работу и дата увольнения, если таковой был);\n3. Реквизиты компании (название, ИНН, ОГРН и адрес)."},
  {id: 'workExperience', title:"Cтаж Работы", body:"1. Фамилия, имя, отчество\n2. Должность\n3. Структурное подразделение\n4. Дата начала работы в организации"},
  {id: 'laborContract', title:"Трудовой договор", body:"1. Фамилия, имя, отчество работника и наименование работодателя (фамилия, имя, отчество работодателя - физического лица), заключивших трудовой договор;\n2. Сведения о документах, удостоверяющих личность работника и работодателя - физического лица;\n3. Идентификационный номер налогоплательщика (для работодателей, за исключением работодателей - физ. лиц, не яв. индивидуальными предпринимателями);\n4. Сведения о представителе работодателя, подписавшем трудовой договор, и основание, в силу которого он наделен соответствующими полномочиями;\n5.Место и дата заключения трудового договора."},
  {id: 'averageSalary', title:"Заработок за последние 3 месяца", body:"1.Наименование, ИНН и юридический адрес учреждения, в котором работал гражданин;\n2.ФИО работника полностью;\n3.Период его работы и должность\n4.Сведения об условиях работы (полный или неполный рабочий день)\n5.Размер среднего заработка за последние три месяца работы"},
]

const SpravkaInformation = () => {
  const {id} = useLocalSearchParams();
  console.log(id)
  // const id = route.params?.id;
  // console.log("Received id:", id);
  const spravka = spravkaBody.find(s => s.id === id);
  return(
    <ScrollView>
    <View style= {styles.titleView}>
      <Text style={styles.title}>{spravka.title}</Text>
    </View>
    <View style= {styles.container}>
      <Text style={styles.spravkaInfo}>Информация о справке:</Text>
      <View style={styles.textContainer}>
        <Text style= {styles.mainText}>{spravka.body}</Text>
      </View>
      <View style={{alignSelf:"center"}}>
        <ButtonInvert title="Подать заявку" />
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
    layout: {
      width : 325,
      height: 29,
      top: 187,
      left: 37
    },
    mainText : {
      fontFamily: 'Montserrat',
      fontWeight : 60,
      fontSize: 16,
      lineHeight: 19.5,
      letterSpacing: 0.1,
      color: '#566884'
    },

    title:{
      fontFamily : 'Montserrat',
      fontSize: 36,
      fontWeight: 90,
      textAlign: "center",
      letterSpacing: 0.1,
      lineHeight: 43.88,
      color: "#152640"
    },
    titleView:{
      padding: 20,
      top: 5,
      alignSelf: "center",
    },
    spravkaInfo:{
      fontFamily : 'Montserrat',
      fontSize: 24,
      fontWeight: 90,
      letterSpacing: 0.1,
      lineHeight: 29.26,
      color: "#32435C"
    },
    
    container: {
      margin: 10,
      justifyContent: 'space-between',
      borderRadius: 20,
      paddingHorizontal: 24,
      paddingVertical: 34,
      marginBottom: 18,
      backgroundColor: '#E9F2FF',
    },

    textContainer:{
      paddingTop : 10,
      paddingVertical : 30,
    }
  });

export default SpravkaInformation;