// FAQList.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';

const faqData = [
  {
    title: 'General FAQs',
    tableSection: [
      {
        lableName: 'What are the church service times?',
        lableValue:
          'Our regular service times are as follows:\n- Sunday Morning Worship: 9:00 AM and 11:00 AM\n- Wednesday Bible Study: 7:00 PM\n- Friday Prayer Meeting: 6:30 PM',
      },
      {
        lableName: 'How can I get involved in the church?',
        lableValue:
          'There are many ways to get involved, including joining a small group, volunteering in various ministries, attending our events, and participating in community outreach programs. Please contact our office or visit our website for more information on how to get started.',
      },
      {
        lableName: 'Do I need to be a member to attend services?',
        lableValue:
          'No, everyone is welcome to attend our services. You do not need to be a member to participate in our worship services, events, or programs.',
      },
      {
        lableName: 'How can I request prayer?',
        lableValue:
          'You can request prayer by contacting our church office, filling out a prayer request form on our website, or speaking to one of our pastors or leaders during a service. We believe in the power of prayer and are here to support you.',
      },
    ],
  },
  {
    title: 'Membership FAQs',
    tableSection: [
      {
        lableName: 'How do I become a member of the church?',
        lableValue:
          'To become a member, you can attend our membership classes, which are held quarterly. These classes provide an overview of our beliefs, mission, and the various ways you can get involved. After completing the class, you will have the opportunity to meet with a pastor and officially join the church.',
      },
      {
        lableName: 'What are the benefits of church membership?',
        lableValue:
          'Membership provides a deeper connection to the church community, opportunities for spiritual growth, and the ability to serve in various ministries. Members also have a voice in church decisions and access to pastoral care and support.',
      },
    ],
  },
  {
    title: 'Giving FAQs',
    tableSection: [
      {
        lableName: 'How can I give to the church?',
        lableValue:
          'There are several ways to give:\n- Online through our website\n- In-person during services\n- By mailing a check to our church office\nYour generous contributions support our mission and various ministries.',
      },
      {
        lableName: 'Is my donation tax-deductible?',
        lableValue:
          'Yes, all donations to the church are tax-deductible. You will receive an annual giving statement for your records.',
      },
    ],
  },
  {
    title: 'Programs and Events FAQs',
    tableSection: [
      {
        lableName: 'What programs are available for children and youth?',
        lableValue:
          'We offer a variety of programs for children and youth, including Sunday School, youth groups, vacation Bible school, and special events throughout the year. Our goal is to provide a safe and nurturing environment for young people to grow in their faith.',
      },
      {
        lableName: 'How can I find out about upcoming events?',
        lableValue:
          'You can find information about upcoming events on our website, in our weekly bulletin, or by following us on social media. We also send out email newsletters with event updates.',
      },
    ],
  },
];

const FAQItem = ({item}) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Animatable.View
      style={styles.itemContainer}
      duration={300}
      transition="backgroundColor">
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <Text style={styles.itemTitle}>{item.lableName}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <Animatable.Text
          animation={collapsed ? undefined : 'fadeIn'}
          style={styles.itemContent}>
          {item.lableValue}
        </Animatable.Text>
      </Collapsible>
    </Animatable.View>
  );
};

const FAQSection = ({section}) => {
  const [collapsed, setCollapsed] = useState(true);
  let {isDarkMode, currentBgColor, currentTextColor} = useSelector(
    state => state.user,
  );

  return (
    <Animatable.View
      style={styles.sectionContainer}
      duration={300}
      transition="backgroundColor">
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <Text style={[styles.sectionTitle, {color: currentTextColor}]}>
          {section.title}
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <Animatable.View animation={collapsed ? undefined : 'fadeIn'}>
          <FlatList
            data={section.tableSection}
            renderItem={({item}) => <FAQItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </Animatable.View>
      </Collapsible>
    </Animatable.View>
  );
};

const FAQList = () => {
  return (
    <FlatList
      data={faqData}
      renderItem={({item}) => <FAQSection section={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: '2%',
    // paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginVertical: 10,
  },
  itemContainer: {
    marginVertical: 5,
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: '5%',
    fontWeight: 'bold',
  },
  itemContent: {
    fontSize: 14,
    lineHeight: 27,
    // marginVertical: 1,
  },
});

export default FAQList;
